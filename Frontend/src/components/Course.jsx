import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-5 md:pl-1 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl">We're delighted to have you <span className="text-pink-400">Here!</span></h1>
            <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi voluptas doloremque ab quo omnis beatae officia.
                Excepturi voluptates ea nam similique ratione officiis accusamus, quas consequuntur animi nostrum adipisci!
            </p>
            <Link to="/">
                <button className="mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300">Back</button>
            </Link>
            
        </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))}
      </div>
    </div>
    </>
  )
}

export default Course
