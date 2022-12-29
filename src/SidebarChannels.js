import React from 'react'
import './SidebarChannels.css'

function SidebarChannels({id, channelName}) {
  return (
    <div className='sidebarChannel'>
        <h4><span className='sidebarChannel___hash'>#</span>{channelName}</h4>
    </div>
  )
}

export default SidebarChannels