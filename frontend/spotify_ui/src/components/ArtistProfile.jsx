
import { useParams } from "react-router-dom"
import { artistsData, assets, songsData } from "../assets/frontend-assets/assets"
import Navbar from "../components/Navbar"
import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"


const ArtistProfile = () => {
    const { play } = useContext(PlayerContext)
    const { playWithId } = useContext(PlayerContext)
    const { id } = useParams()
    const artist = artistsData.find(a => a.id === Number(id))

    if (!artist) {
        return <div className="p-6 text-white">Artist not found</div>
    }

    const artistSongs = songsData.filter(
        song => song.artistId === artist.id
    )



    return (
        <div className="flex-1 overflow-y-auto text-white">
            <Navbar />

            {/* ===== ARTIST HEADER (Spotify style) ===== */}
            <div className="relative h-[320px] bg-gradient-to-b from-neutral-700 to-black">
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative flex items-end gap-6 p-8">
                    <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-56 h-56 rounded-full object-cover shadow-2xl"
                    />

                    <div>
                        <p className="flex items-center gap-2 uppercase text-sm tracking-widest text-gray-300">
                            <img
                                src={assets.verified_icon}
                                alt="verified"
                                className="w-4 h-4"
                            />
                            Verified Artist
                        </p>


                        <h1 className="text-6xl font-extrabold mt-2">
                            {artist.name}
                        </h1>

                        <p className="mt-4 text-sm text-gray-300">
                            {artist.monthlyListeners} monthly listeners
                        </p>
                    </div>
                </div>
            </div>

            {/* ===== ACTION BAR ===== */}
            <div className="flex items-center gap-6 px-8 mt-6">
                <button className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-black hover:scale-105 transition">
                    <img onClick={play} src={assets.play_icon} alt="play" className="w-6 h-6 text-black" />

                </button>

                <button className="border border-gray-600 px-6 py-2 rounded-full text-sm hover:border-white transition">
                    Follow
                </button>

                <span className="text-sm text-gray-400">
                    {artist.followers} followers
                </span>
            </div>


            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4' >#</b>Title</p>
                <p>Song</p>
                <p className='hidden sm:block'>Date added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>

            <hr />
            {
                artistSongs.map((item, index) => (
                    <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-[15px]'> {item.name} </p>
                        <p className='text-[15px] hidden sm:block'>5 days Ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }




            {/* ===== ABOUT ===== */}
            <div className="px-8 mt-12 mb-10 max-w-3xl">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-300 leading-relaxed">
                    {artist.about}
                </p>
            </div>
        </div>
    )
}

export default ArtistProfile
