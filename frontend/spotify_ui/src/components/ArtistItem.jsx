import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistItem = ({ name, image, id, about }) => {
    const navigate = useNavigate()
    return (
        <Link to={`/artist/${id}`} className="min-w-[160px] group">
            <div onClick={() => navigate(`/artist/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' >
                <img className=' h-30 w-30 rounded-full' src={image} alt="" />
                <p className='font-bold mt-2 mb-1'> {name}</p>
                <p className='text-slate-200 text-sm'>{about}</p>
            </div>
        </Link>

    )

}
export default ArtistItem