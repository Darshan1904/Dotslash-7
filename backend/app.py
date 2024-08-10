from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import numpy as np
import pickle
import tensorflow
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from sklearn.neighbors import NearestNeighbors
from numpy.linalg import norm
import base64
from PIL import Image
from io import BytesIO
import stripe
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt

load_dotenv()
 
stripe.api_key = os.environ.get("stripeSecretKey")

app = Flask(__name__)
CORS(app)

# # connecting to database
# db=SQLAlchemy()
# app.config["SQLALCHEMY_DATABASE_URI"]="postgresql://postgres.agkdfsikvwnuaqyiwbpi:Custom#Craft1@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
# db.init_app(app)
# bcrypt = Bcrypt(app)

# # database model definition and creating tables
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     password = db.Column(db.String)
#     email = db.Column(db.String, unique=True, nullable=False)
#     role = db.Column(db.String)
# with app.app_context():
#     db.create_all()


feature_list = np.array(pickle.load(open('embeddings.pkl', 'rb')))
filenames = pickle.load(open('filenames.pkl', 'rb'))

model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
model.trainable = False

model = tensorflow.keras.Sequential([
    model,
    GlobalMaxPooling2D()
])

def feature_extraction(img_array):
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = preprocess_input(expanded_img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)
    return normalized_result

def recommend(features, feature_list):
    neighbors = NearestNeighbors(n_neighbors=6, algorithm='brute', metric='euclidean')
    neighbors.fit(feature_list)

    distances, indices = neighbors.kneighbors([features])

    return indices

@app.route('/recommend', methods=['POST'])
def recommend_endpoint():
    try:
        file = request.files['file']

        # Save the file temporarily
        temp_path = "temp_image.jpg"
        file.save(temp_path)

        # Process the image data
        img = image.load_img(temp_path, target_size=(224, 224))
        img_array = image.img_to_array(img)


        # base64_image = request.json['image_data']
        # base64_image.strip()
        # print(len(base64_image))
        # # Decode the base64 string to binary data
        # binary_data = base64.urlsafe_b64decode(base64_image)
        # print(binary_data)
        # # Create a BytesIO object to simulate a file-like object
        # image_file = BytesIO(binary_data)

        # # Process the image data
        # img = Image.open(image_file)
        # img = img.resize((224, 224))  # Resize the image to the desired dimensions
        # img_array = image.img_to_array(img)

        # Feature extraction
        features = feature_extraction(img_array)

        # Recommendation
        indices = recommend(features, feature_list)

        # Return recommended image paths in JSON format
        recommended_images = []
        for idx in indices[0]:
            image_path = filenames[idx]
            with open(image_path, "rb") as img_file:
                img_data = base64.b64encode(img_file.read()).decode('utf-8')

            recommended_images.append({
                "filename": os.path.basename(image_path),
                "content": img_data
            })
        # Remove the temporary file
        os.remove(temp_path)

        return jsonify({"recommended_images": recommended_images})

    except Exception as e:
        return jsonify({"error": str(e)})
    
@app.route('/api/stripe', methods=['POST'])
def create_payment_intent():
    try:
        payment_intent = stripe.PaymentIntent.create(
            amount=5000,
            currency='INR',
        )
        print(payment_intent)
        return jsonify({'clientSecret': payment_intent.client_secret}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

# @app.route('/signup', methods=["POST"])
# def signup():
#     data = request.get_json()
#     password = data.get('password')
#     email = data.get('email')
#     role = data.get('role', 'user')  # Default role is 'user' if not provided

#     if not password:
#         return jsonify({"error": "Password is required"}), 400

#     existing_user = User.query.filter_by(email=email).first()
#     if existing_user:
#         return jsonify({"error": "Username already exists"}), 400
#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
#     new_user = User(password=hashed_password, email=email, role=role)

#     try:
#         db.session.add(new_user)
#         db.session.commit()
#         return jsonify({"message": "User created successfully", "user": {
#             "id": new_user.id,
#             "email": new_user.email,
#             "role": new_user.role
#         }}), 201
#     except Exception as e:
#         db.session.rollback()
#         return jsonify({"error": str(e)}), 500
    
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({"error": "Username and password are required"}), 400

#     user = User.query.filter_by(email=email).first()
#     if user and bcrypt.check_password_hash(user.password, password):
#         return jsonify({"message": "Login successful", "user": {
#             "id": user.id,
#             "email": user.email,
#             "role": user.role
#         }}), 200
#     else:
#         return jsonify({"error": "Invalid username or password"}), 401
    
# @app.route('/products')
# def getAllProducts():

# @app.route('/addProduct', methods=['POST'])
# def addProduct():

if __name__ == '__main__':
    app.run(debug=True)
