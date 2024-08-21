import React, { useEffect, useState } from 'react'
import "./Recommended.css"
import thumbnail1 from"../../assets/thumbnail1.png"
import thumbnail2 from"../../assets/thumbnail2.png"
import thumbnail3 from"../../assets/thumbnail3.png"
import thumbnail4 from"../../assets/thumbnail4.png"
import thumbnail5 from"../../assets/thumbnail5.png"
import thumbnail6 from"../../assets/thumbnail6.png"
import thumbnail7 from"../../assets/thumbnail7.png"
import thumbnail8 from"../../assets/thumbnail8.png"
import { API_KEY, viewNumber } from '../../data'
import { Link } from 'react-router-dom'
import moment from 'moment'

function Recommended({categoryId}) {
  const [data,setData] = useState([])
  async function fetchData(){
    const relatedVideo_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&&key=${API_KEY}`
    await fetch(relatedVideo_URL)
    .then(res=>res.json())
    .then(data=> setData(data.items))
    .catch(err=> console.error("Error fetchChannel ",err))
  }
  useEffect(()=>{
    fetchData()
  },[])





  return (
    <div className='hidden md:block'>
      {data.map((items,index)=>{
        return(
          <div className='pb-2'>
          <Link to={`/video/${items.snippet.categoryId}/${items.id}`}  key={items.id} className='castom-site-video-card rounded-xl'>
          <div className=' flex  cursor-pointer h-[105px]'>
            <img className='w-[175px] h-[100%] rounded-xl' src={items.snippet.thumbnails.medium.url} alt="" />
              <div className='ml-2 py-2'>
                <p className='f1 text-[14px] mb-1'>{items.snippet.title.length>40? items.snippet.title.slice(0 , 70) + " ..." :items.snippet.title }</p>
                <div>
                  <p className='f3 text-xs'>{items.snippet.channelTitle}</p>
                  <p className='f3 text-xs'>{viewNumber(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt, "YYYYMMDD").fromNow()}</p>
                </div>
              </div>
          </div>
        </Link>
        </div>
        )
      })}






      
    </div>

  )
}

export default Recommended
