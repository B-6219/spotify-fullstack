

import { useParams } from "react-router-dom"
import { artistsData, assets, songsData } from "../assets/frontend-assets/assets"
import Navbar from "../components/Navbar"


const ArtistProfile = () => {
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
                    <img src={assets.play_icon} alt="play" className="w-6 h-6 text-black" />

                </button>

                <button className="border border-gray-600 px-6 py-2 rounded-full text-sm hover:border-white transition">
                    Follow
                </button>

                <span className="text-sm text-gray-400">
                    {artist.followers} followers
                </span>
            </div>

            {/* ===== POPULAR SONGS ===== */}
            <div className="px-8 mt-10">
                <h2 className="text-xl font-bold mb-4">Popular</h2>

                <div className="flex flex-col">
                    {artistSongs.map((song, index) => (
                        <div
                            key={song.id}
                            className="grid grid-cols-[40px_1fr_80px] gap-4 items-center px-3 py-2 rounded-md hover:bg-white/10 group"
                        >
                            <span className="text-gray-400 group-hover:hidden">
                                {index + 1}
                            </span>

                            <img src={assets.play_icon} alt="play" className="w-6 h-6" />


                            <div className="flex items-center gap-4">
                                <img
                                    src={song.image}
                                    className="w-10 h-10 object-cover rounded"
                                />
                                <span className="font-medium">{song.name}</span>
                            </div>

                            <span className="text-sm text-gray-400 text-right">
                                {song.duration}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

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
