import React from 'react'
import { useLocation } from 'react-router-dom'
import { CanvasShirtModel, CanvasShoeModel, CanvasChairModel } from '../canvas'
import Customizer from '../pages/Customizer'
import { CanvasCaseModel } from './canvas1'


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
      <CanvasShoeModel />
      <Customizer />
    </div>
  }

  return (
    <div className='h-screen w-screen'>
      <CanvasCaseModel />
      <Customizer />
    </div>
  )
}

export default CustomizerModel
