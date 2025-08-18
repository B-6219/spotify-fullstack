import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext(null);

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = async (id) => {
    setTrack(songsData[id]);
    if (audioRef.current) {
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const previous = async () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      if (audioRef.current) {
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      if (audioRef.current) {
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }
  };

  const seekSong = (e) => {
    if (audioRef.current && seekBg.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current.duration;
    }
  };

  // handle time updates safely
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!seekBar.current || !audio.duration) return;

      seekBar.current.style.width =
        Math.floor((audio.currentTime / audio.duration) * 100) + "%";

      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60),
          minute: Math.floor(audio.duration / 60),
        },
      });
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [track]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}

      {/* ✅ audio element is here, always mounted */}
      <audio ref={audioRef} src={track.file} preload="metadata" />
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
