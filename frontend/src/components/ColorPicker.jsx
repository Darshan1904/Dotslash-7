import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3 bg-slate-300 px-4 py-6 flex flex-col gap-2">
      {/* <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      /> */}
      <h2 className='text-center text-base'>Cutomize Logo</h2>
      <div className='flex flex-col gap-1'>
        <label htmlFor="logox" className='text-gray-600'>Horizotal Position</label>
        <input type="number" value={snap.logoX} onChange={e => state.logoX = (parseFloat(e.target.value))} className=' bg-red-100 px-2' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="logoy">Vertical Position</label>
        <input type="number" value={snap.logoY} onChange={e => state.logoY = (parseFloat(e.target.value))} className=' bg-red-100 px-2' />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="logoSize">Size </label>
        <input type="number" id='logoSize' value={snap.logoSize} onChange={e => state.logoSize = e.target.value} className=' bg-red-100 px-2' />
      </div>

    </div>
  )
}

export default ColorPicker