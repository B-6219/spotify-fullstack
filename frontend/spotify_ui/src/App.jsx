import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import ArtistProfile from "./components/ArtistProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  const { audioRef, track } = useContext(PlayerContext)
  return (



    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
        </Routes>

      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>




  )
}
export default App