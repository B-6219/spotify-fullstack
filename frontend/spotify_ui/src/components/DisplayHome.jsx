import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/frontend-assets/assets'
import AbumItem from './AbumItem.jsx'
import { songsData } from '../assets/frontend-assets/assets.js'
import { artistsData } from '../assets/frontend-assets/assets.js'
import SongItem from './SongItem.jsx'
import ArtistItem from './ArtistItem.jsx'


const DisplayHome = () => {
  return (
    <>
      <Navbar />

      {/* Featured Charts */}
      <section className="mb-12">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex gap-4 overflow-x-auto">
          {albumsData.map(item => (
            <AbumItem
              key={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </section>



      {/* Popular Songs */}
      <section className="mb-12">
        <h1 className="my-5 font-bold text-2xl">Popular Songs</h1>
        <div className="flex gap-4 overflow-x-auto">
          {songsData.map(item => (
            <SongItem
              key={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </section>

      {/* Popular Artists */}
      <section className="mb-12">
        <h1 className="my-5 font-bold text-2xl">Popular Artists</h1>
        <div className="flex gap-4 overflow-x-auto">
          {artistsData.slice(1, 6).map(item => (
            <ArtistItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  )
}


export default DisplayHome