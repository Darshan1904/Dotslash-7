import React from 'react'
import CustomButton from './CustomButton';
import state from '../store';
import StripeWrapper from './StripeWrapper';



const ImageDownloader = () => {
  let canvas = document.getElementsByTagName('canvas')[0];

  let dataURL = canvas.toDataURL('image/png');
  state.customizedModelImage = dataURL
  return (
    <div className="imageDownloader-container bg-gray-400">

      {!dataURL ? <p>Loading...</p> : <img src={dataURL} alt="Customized Product" className='w-full h-full object-cover' />}
      <StripeWrapper />
    </div>
  )
}

export default ImageDownloader