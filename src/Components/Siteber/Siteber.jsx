import React from 'react'
import "./Siteber.css"
import Home_icon from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobiles_icon from "../../assets/automobiles.png"
import sports_icon from "../../assets/sports.png"
import entertainment_icon from "../../assets/entertainment.png"
import tech_icon from "../../assets/tech.png"
import music_icon from "../../assets/music.png"
import blogs_icon from "../../assets/blogs.png"
import news_icon from "../../assets/news.png"
import jack_icon from "../../assets/jack.png"
import tom_icon from "../../assets/tom.png"
import megan_icon from "../../assets/megan.png"
import cameron_icon from "../../assets/cameron.png"
import { Link } from 'react-router-dom'
function Siteber({siteber, category, setCategory }) {
  return (
    <aside className={`${siteber? "hidden md:block w-[16vw] h-[90vh] bg-white  px-3 f1 text-sm ":"castom-aside w-20 h-[90vh] px-1 f1 text-sm "}`}>
      <div className={` ${siteber ? " castom-sortcut-links": "costom-little-siteber "} `}>
        <Link to={"/"}>
        <div className={`castom-side-link ${category===0 && "active"}`} onClick={()=>setCategory(0)}>
            <img src={Home_icon} alt="" /><p>Home</p>
        </div>
        </Link>

        <div className={`castom-side-link ${category===20 && "active"}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className={`castom-side-link ${category===2 && "active"}`} onClick={()=>setCategory(2)}>
            <img src={automobiles_icon} alt="" /><p>Automobiles</p>
        </div>
        <div className={`castom-side-link ${category===17 && "active"}`} onClick={()=>setCategory(17)}>
            <img src={sports_icon} alt="" /><p>Sports</p>
        </div>

        {
            siteber && <>
                <div className={`castom-side-link ${category===24 && "active"}`} onClick={()=>setCategory(24)}>
            <img src={entertainment_icon} alt="" /><p>Entertainment</p>
        </div>
        <div className={`castom-side-link ${category===28 && "active"}`} onClick={()=>setCategory(28)}>
            <img src={tech_icon} alt="" /><p>Tecnology</p>
        </div>
        <div className={`castom-side-link ${category===10 && "active"}`} onClick={()=>setCategory(10)}>
            <img src={music_icon} alt="" /><p>Music</p>
        </div>
        <div className={`castom-side-link ${category===22 && "active"}`} onClick={()=>setCategory(22)}>
            <img src={blogs_icon} alt="" /><p>Blogs</p>
        </div>
        <div className={`castom-side-link ${category===25 && "active"}`} onClick={()=>setCategory(25)}>
            <img src={news_icon} alt="" /><p>News</p>
        </div>
            </>
        }
        


        {siteber && <hr className='my-3 '/>}
      </div>
      <div className='Subscribed-list'>
        {siteber && <h3 className='text-base mb-3'>Subscriptions</h3>}
        <div className='castom-side-link '>
            <img src={jack_icon} alt="" /><p>Jack Roy</p>
        </div>
        <div className='castom-side-link'>
            <img src={megan_icon} alt="" /><p>Simon Sorkar</p>
        </div>
        <div className='castom-side-link'>
            <img src={tom_icon} alt="" /><p>MD Tomin</p>
        </div>
        <div className='castom-side-link'>
            <img src={cameron_icon} alt="" /><p>Rakib sikder</p>
        </div>
      </div>
    </aside>
  )
}

export default Siteber