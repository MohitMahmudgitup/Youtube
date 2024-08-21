import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { Link } from 'react-router-dom'
import { API_KEY, viewNumber } from '../../data'
import moment from 'moment'

function Feed({category}) {
    const [data, setData] = useState([])
    const fetchData = async ()=>{
        const videoList_URL = `  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_URL)
        .then(response=>response.json())
        .then(data=> setData(data.items || []))
        .catch(err=>console.error("Error fetching data",err))
    }

    useEffect(()=>{
        fetchData()
    },[category])




  return (
    <div className='castom-feeds flex justify-between flex-wrap'>

        {data.map((element,index)=>{
            return(<Link to={`video/${element.snippet.categoryId}/${element.id}`} key={element.id} className=' w-[32%] flex md:p-1 flex-col cursor-pointer mt-2 md:mt-10 '>
            <div className="castom-feed-img-box md:rounded-xl object-cover overflow-hidden">
                <img className=' w-[100%] h-[220px] md:h-[100%]' src={element.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className='mt-3 px-2'>
                <h2 className='f2'>{element.snippet.title.length>60 ? element.snippet.title.slice(0 , 60) + "..." : element.snippet.title}</h2>
                <h3 className='f4'>{element.snippet.channelTitle}</h3>
                <p className='f4'>{viewNumber(element.statistics.viewCount)} views &bull; {moment(element.snippet.publishedAt, "YYYYMMDD").fromNow()}</p>
            </div>
        </Link>
            )
        })}

    </div>
    
  )
}

export default Feed