import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice';
import './SidebarChannels.css'

function SidebarChannels({id, channelName}) {
  const dispatch = useDispatch();
  console.log(channelName);
  return (
    <div 
      className='sidebarChannel'
     onClick={() => 
      dispatch(
        setChannelInfo({
        channelId: id,
        channelName: channelName,
    })
    )
    }
    >
        <h4><span className='sidebarChannel___hash'>#</span>{channelName}</h4>
    </div>
  );
}

export default SidebarChannels