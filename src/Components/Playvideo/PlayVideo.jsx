import React, { useEffect, useState } from 'react'
import  like_icom from "../../assets/like.png"
import disLike_icon from "../../assets/dislike.png"
import share_icon from "../../assets/share.png"
import save_icon from "../../assets/save.png"
import user_profile from "../../assets/user_profile.jpg"
import { API_KEY , viewNumber } from '../../data'
import moment from 'moment'
import "./Playvideo.css"


export default function PlayVideo({videoId}) {
  const [data,setData] = useState(null)
  const [channelData, setChannelData] = useState(null)
  const [commendData, setCommendData] = useState([])

  async function fetchVideo (){
    const video_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(video_API)
    .then(res=>res.json())
    .then(data=> setData(data.items[0]))
    .catch(err=> console.error("Error fetchVideo ",err))
  }
  async function channelDataFunction(){
    
    // fetchChannel
    const channel_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${API_KEY} `
    await fetch(channel_API)
    .then(res=>res.json())
    .then(data=> setChannelData(data.items[0]))
    .catch(err=> console.error("Error fetchChannel ",err))

    // commendChannel
    const commend_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY} `
    await fetch(commend_API)
    .then(res=>res.json())
    .then(data=> setCommendData(data.items))
    .catch(err=> console.error("Error commendChannel ",err))

  }

useEffect(()=>{
  fetchVideo()
},[])
useEffect(()=>{
  channelDataFunction()
},[data])

  
  return (
    <div className='text-black '>
    <iframe  width="853" height="480" className='md:rounded-xl castom-playVideo' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* <video width="853" height="480"  src={video1_icom} controls autoPlay muted></video> */}
      <div className='castom-video-text1  p-4 '>
      <h2 className='f2 text-2xl '>{data && data.snippet.title}</h2>
      <p className='f3 text-sm'>{data && data.statistics.viewCount} views &bull; {moment(data && data.snippet.publishedAt, "YYYYMMDD").fromNow()}</p>
      <div className='flex justify-between items-center mt-4'>
        <div className='castom-subscribeAndID-box  flex items-center justify-between md:gap-4 '>
          <div className='flex gap-4'>
          <img className='w-12 h-12 rounded-full' src={channelData&& channelData.snippet.thumbnails.default.url} alt="" />
          <div>
            <h2 className='f1'>{data && data.snippet.channelTitle}</h2>
            <p className='f3 text-xs'>{channelData && viewNumber(channelData.statistics.subscriberCount)} subscribers</p>
            </div>
          </div>
          <button className='f1 text-sm bg-black px-5 py-2 rounded-full text-white'>Subscribe</button>
        </div>
        <div className='hidden md:flex items-center w-[300px] justify-between '>
          <div className='flex  bg-slate-200 items-center rounded-full px-4 '>
          <span className='flex cursor-pointer justify-center items-center gap-2 h-10 w-14 p-2'><img className='w-5 h-5' src={like_icom} alt="" />{viewNumber(data && data.statistics.likeCount)}</span>
          <span className='flex cursor-pointer justify-center items-center gap-2 border-l border-1 border-gray-300 h-8 w-14'><img className='w-5 h-5' src={disLike_icon} alt="" /></span>
          </div>
          <span className='flex cursor-pointer items-center gap-2 bg-slate-200 px-5 py-2 rounded-full'><img className='w-5 h-5' src={share_icon} alt="" />123</span>
          <span className='flex cursor-pointer items-center gap-2 bg-slate-200 px-3 py-3 rounded-full'><img className='w-5 h-5' src={save_icon} alt="" /></span>
        </div>
      </div>
      <div className='mt-4 f4'>
        <h5>{data && data.snippet.description.slice(0,250)+"..."}</h5>
      </div>
        </div> 
      <hr />
      <div className='castom-videoCommend-box f4 mt-2 md:mt-4 p-4'>
        <h2 className='f2 text-xl'>{data && data.statistics.commentCount}  Comments</h2>

          {commendData.map((items,index)=>{

            return(
              <div key={items.id} className='castom-commends  md:rounded-md text-wrap flex pl-2 gap-5 mt-4'>
              <img className=' w-10 h-10 rounded-full' src={items.snippet.topLevelComment.snippet.authorProfileImageUrl } alt="" />
                <div className=''>
                  <div className='flex items-center gap-2'>
                    <h2 className='f1 text-xs'>{items.snippet.topLevelComment.snippet.authorDisplayName }</h2>
                    <p className='f4 text-sm'>5 months ago</p>  
                  </div>   
                  <div className='mt-2'>
                      <p className="f3 text-sm ">{items.snippet.topLevelComment.snippet.textDisplay.slice(0 , 200) }</p>
                      <div className='flex mt-1 items-center gap-5 f3 text-xs  w-[100px] md:w-[100%]'>
                        <span className='flex cursor-pointer items-center gap-3 '><img className='w-5 h-5' src={like_icom} alt="" />{viewNumber(items.snippet.topLevelComment.snippet.likeCount)}</span>
                        <span className='flex cursor-pointer items-center gap-3'><img className='w-5 h-5' src={disLike_icon} alt="" /></span>
                      </div>
                </div>           
                </div>
              </div>
            )
          })}
          
          






      </div>
    </div>
  )
}
