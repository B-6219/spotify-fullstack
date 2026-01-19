import { useParams } from "react-router-dom"
import { artistsData, songsData } from "../assets/frontend-assets/assets"
import Navbar from "../components/Navbar"
import SongItem from "../components/SongItem"

const ArtistProfile = () => {
    const { id } = useParams()

    const artist = artistsData.find(a => a.id === Number(id))

    if (!artist) {
        return <div className="p-6 text-white">Artist not found</div>
    }

    // filter songs by artist (adjust key if needed)
    const artistSongs = songsData.filter(
        song => song.artistId === artist.id
    )

    return (
        <div className="w-full overflow-y-auto text-white">
            <Navbar />

            {/* Artist Header */}
            <div className="flex items-end gap-6 p-6 bg-gradient-to-b from-neutral-800 to-black">
                <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-52 h-52 rounded-full object-cover shadow-2xl"
                />

                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-300">
                        Artist
                    </p>

                    <h1 className="text-5xl font-extrabold mt-2">
                        {artist.name}
                    </h1>

                    <p className="mt-3 text-gray-300 max-w-xl">
                        {artist.about}
                    </p>

                    <p className="mt-4 text-sm text-gray-400">
                        {artist.followers} Followers • {artist.monthlyListeners} Monthly listeners
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6 px-6 mt-6">
                <button className="bg-green-500 text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition">
                    Play
                </button>

                <button className="border border-gray-500 px-6 py-2 rounded-full text-sm hover:border-white transition">
                    Follow
                </button>
            </div>

            {/* Songs */}
            <div className="mt-8 px-6">
                <h2 className="text-xl font-bold mb-4">Popular</h2>

                <div className="flex flex-col gap-2">
                    {artistSongs.length > 0 ? (
                        artistSongs.map(song => (
                            <SongItem
                                key={song.id}
                                id={song.id}
                                name={song.name}
                                desc={song.desc}
                                image={song.image}
                            />
                        ))
                    ) : (
                        <p className="text-gray-400">No songs available</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ArtistProfile
