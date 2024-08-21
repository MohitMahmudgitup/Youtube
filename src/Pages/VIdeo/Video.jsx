import React from 'react'
import PlayVideo from '../../Components/Playvideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

function Video() {
  const { videoId,categoryId } = useParams()  // Correctly destructure the params object
  return (
    <>
      <main className='flex md:pt-7'>
        <div className='flex md:w-[65%] md:pl-10'>
          <PlayVideo videoId={videoId}/>
        </div>
        <div className='pl-10 pr-5 w-[35%]'>
          <Recommended categoryId={categoryId}/> {/* Assuming you might need to pass categoryId here */}
        </div>
      </main>
    </>
  )
}

export default Video
