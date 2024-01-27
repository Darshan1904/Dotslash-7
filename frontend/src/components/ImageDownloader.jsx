import React from 'react'
import CustomButton from './CustomButton';
import state from '../store';



const ImageDownloader = () => {
  let canvas = document.getElementsByTagName('canvas')[0];

  let dataURL = canvas.toDataURL('image/png');
  state.customizedModelImage = dataURL
  return (
    <div className="imageDownloader-container bg-gray-400">

      {!dataURL ? <p>Loading...</p> : <img src={dataURL} alt="Customized Product" className='w-full h-full object-cover' />}
      <CustomButton
        type="outline"
        title="Proceed to Pay"
        handleClick={() => { }}

        customStyles="text-xs text-black"
      />
    </div>
  )
}

export default ImageDownloader