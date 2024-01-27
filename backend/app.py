from flask import Flask, request, jsonify
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

app = Flask(__name__)

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
        # Receive image from the frontend
        file = request.files['file']

        # Save the file temporarily
        temp_path = "temp_image.jpg"
        file.save(temp_path)

        # Process the image data
        img = image.load_img(temp_path, target_size=(224, 224))
        img_array = image.img_to_array(img)

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

if __name__ == '__main__':
    app.run(debug=True)
