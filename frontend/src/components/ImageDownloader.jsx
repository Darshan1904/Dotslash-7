import React, { useEffect } from 'react';
import CustomButton from './CustomButton';
import state from '../store';
import StripeWrapper from './StripeWrapper';
import axios from 'axios';
import { Link } from 'react-router-dom';

async function sendImage(base64Data) {
  try {
    let base64WithoutPrefix = base64Data.replace(/^data:image\/(png|jpeg);base64,/, "");
    let uint8Array = new Uint8Array(atob(base64WithoutPrefix).split('').map(char => char.charCodeAt(0)));
    let blob = new Blob([uint8Array], { type: 'image/png' });
    let formData = new FormData();
    formData.append('file', blob, 'image.png');

    const response = await axios.post('/recommend', formData);
    state.recommendations=response.data.recommended_images
    // response.data.recommended_images.forEach(img => {
    //   let cardContainer = document.createElement('div');
    //   cardContainer.className = 'card-container grid grid-cols-4 gap-2';

    //   response.data.recommended_images.forEach(img=>{
    //     let img_url = 'data:image/png;base64,' + img.content;
    //     cardContainer.innerHTML += `<section className="text-gray-600 body-font" id='products'>
    //     <div className="container px-5 pt-24 -mt-10 mx-auto">
    //         <div className="flex flex-wrap -m-4">
    //             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //               <div className="block relative h-36 rounded overflow-hidden">
    //                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src=${img_url} />
    //               </div>
    //         </div>
    //     </div>
    //   </section>`
    //   })

    //   document.body.appendChild(cardContainer);
    // });
  } catch (error) {
    console.error(error);
  }
}

const ImageDownloader = () => {
  let canvas = document.getElementsByTagName('canvas')[0];
  let dataURL = canvas.toDataURL('image/png');
  state.customizedModelImage = dataURL;

  useEffect(()=>{
    sendImage(dataURL);
  }, [dataURL]);

  return (
    <div className="imageDownloader-container bg-gray-400">
      {!dataURL ? <p>Loading...</p> : <img src={dataURL} alt="Customized Product" className='w-full h-full object-cover' />}
      <span>Rs 500</span>
      <StripeWrapper />
    </div>
  );
}

export default ImageDownloader;