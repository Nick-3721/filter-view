import React from 'react'

const CurrentView = ({ view, viewDropDown }) => {
  return (
  <div className="current-view-wrapper" onClick={viewDropDown}>
    <p className='current-view'>{view.charAt(0).toUpperCase() + view.slice(1)}</p>
    {view === 'list' && <img src='../public/list-solid.svg' alt="List Icon" className='tab-icons'/>}
    {view === 'grid' && <img src='../public/grid-solid.svg' alt="Grid Icon" className='tab-icons'/>}
  </div> 
  )
}

export default CurrentView