import React from 'react'
import Navbar from './Navbar'
import {albumsData} from '../assets/frontend-assets/assets'
import AbumItem from './AbumItem.jsx'
import {songsData} from '../assets/frontend-assets/assets.js'
import SongItem from './SongItem.jsx'

const DisplayHome = () => {
  return (
        <>
           <Navbar/>

           <div className='mb-4'>
				<h1 className='my-5 font-bold text-2x1'>Featured Charts</h1>
				<div className='flex overflow-auto'>
					{albumsData.map((item,index)=>(<AbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
				 </div>
           </div>

		    <div className='mb-4'>
				<h1 className='my-5 font-bold text-2x1'>Biggest Hits</h1>
				<div className='flex overflow-auto'>
                    {songsData.map((item,index )=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
				</div>
            </div>

        </>
	
  )
} 

export default DisplayHome