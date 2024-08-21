import React, { useState } from 'react'
import Siteber from "../../Components/Siteber/Siteber.jsx"
import Feed from '../../Components/Feed/Feed.jsx'
import { useOutletContext } from 'react-router-dom'

function Home() {
  const {siteber} = useOutletContext()
  const [category,setCategory] = useState(0)
  return (
    <>
    <main className='flex'>
      <Siteber className="" siteber={siteber} category={category} setCategory={setCategory}/>
        <div className='md:p-4'>
          <Feed category={category}/>
        </div>
    </main>

    
    </>
  )
}

export default Home