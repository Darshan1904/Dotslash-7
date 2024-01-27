import React from 'react'
import { useLocation } from 'react-router-dom'
import { CanvasShirtModel } from '../canvas'
import Customizer from '../pages/Customizer'
import { CanvasChairModel, CanvasShoesModel } from './canvas1'

const CustomizerModel = () => {
  const location = useLocation()
  let model = location.search
  console.log(model)
  if (model == '?tshirt') {
    return <div className='h-screen w-screen'>
      <CanvasShirtModel />
      <Customizer />
    </div>
  }
  if (model == '?chair') {
    return <div className='h-screen w-screen'>
      <CanvasChairModel />
      <Customizer />
    </div>
  }
  if (model == '?shoes') {
    return <div className='h-screen w-screen'>
      <CanvasShoesModel />
      <Customizer />
    </div>
  }
  return (
    <div>
      <p>
        Hello
      </p>
    </div>
  )
}

export default CustomizerModel
