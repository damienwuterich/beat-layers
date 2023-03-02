import { useState } from "react";
import "./App.sass";

const times = [...Array(8).keys()].map((i) => 1 + i / 2);
const increment = times[1] - times[0];

function Track({ track }) {
  return (
    <div className="track">
      <select className="sound">
        <option>KbdSpaceBarModernUX.wav</option>
        <option>KbdFunction.wav</option>
      </select>
      <div className="timeline">
        {times.map((time) => (
          <div key={time} className={track[time] ? "selected" : ""}>
            {time}
          </div>
        ))}
      </div>
    </div>
  );
}

function playSound(sound) {
  new Audio(`beat-layers/sounds/${sound}`).play();
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(times[0]);
  const [tracks, setTracks] = useState([
    { sound: "KbdSpaceBarModernUX.wav", 1: true, 3: true },
    { sound: "KbdFunction.wav", 2: true, 4.5: true },
  ]);
  const [timeoutID, setTimeoutID] = useState(null);

  function play() {
    console.log(currentTime);
    for (const track of tracks) {
      if (track[currentTime]) {
        playSound(track.sound);
      }
    }

    const newTimeoutID = setTimeout(incrementTimeThenPlay, 1000 * increment);
    setTimeoutID(newTimeoutID);
  }

  function incrementTimeThenPlay() {
    if (currentTime === 4.5) setCurrentTime(1);
    else setCurrentTime(currentTime + increment);
    play();
  }

  function handlePlayPauseToggle() {
    if (isPlaying) {
      clearTimeout(timeoutID);
      setTimeoutID(null);
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="App">
      <button onClick={handlePlayPauseToggle}>
        {isPlaying ? "pause" : "play"}
      </button>
      {tracks.map((track, i) => (
        <Track key={i} track={track} />
      ))}
    </div>
  );
}
