import React from 'react'
import CustomButton from './CustomButton';
import state from '../store';
import StripeWrapper from './StripeWrapper';
import axios from 'axios';

async function sendImage(base64Data) {
  try {
    let base64WithoutPrefix = base64Data.replace(/^data:image\/(png|jpeg);base64,/, "");

    // Convert the base64 string to a Uint8Array
    let uint8Array = new Uint8Array(atob(base64WithoutPrefix).split('').map(char => char.charCodeAt(0)));

    // Create a Blob from the Uint8Array
    let blob = new Blob([uint8Array], { type: 'image/png' });

    // Create a FormData object and append the blob with the same field name ('file')
    let formData = new FormData();
    formData.append('file', blob, 'image.png');

    const response = await axios.post('/recommend', formData);
    response.data.recommended_images.forEach(img => {
      let imageElement = document.createElement('img');
      // Set the source of the image to the base64 string
      imageElement.src = 'data:image/png;base64,' + img.content;
      // Append the image element to the window or any other container element
      document.body.appendChild(imageElement);
    })
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

const ImageDownloader = () => {
  let canvas = document.getElementsByTagName('canvas')[0];

  let dataURL = canvas.toDataURL('image/png');
  state.customizedModelImage = dataURL;

  sendImage(dataURL);

  return (
    <div className="imageDownloader-container bg-gray-400">

      {!dataURL ? <p>Loading...</p> : <img src={dataURL} alt="Customized Product" className='w-full h-full object-cover' />}
      <span>Rs 500</span>
      <StripeWrapper />
    </div>
  )
}

export default ImageDownloader