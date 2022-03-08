import React from 'react'
import ReactPlayer from 'react-player'

export default function ResponsiveVideo(props) {
  return (
    <div className='relative pt-[56.25%]'>
      <ReactPlayer
        className='absolute top-0 left-0'
        url={props.url}
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  )
}