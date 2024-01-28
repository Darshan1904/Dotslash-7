import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'
import { Link } from 'react-router-dom'

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)

  const activeStyles = isFilterTab && isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: 'transparent', opacity: 1 }

  return (
    <>
    {
      
      tab.name==='showsimilar'
      ?
      <Link to="/similar">
        <img src={tab.icon} alt={tab.name} className={`${isFilterTab ? 'w-6 h-6' : 'w-8 h-8 object-cover'}`} />
      </Link>:
      <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
      title={tab.name}>
      <img src={tab.icon} alt={tab.name} className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain scale-75'}`} />
    </div>
    
  }</>
  )
}

export default Tab
