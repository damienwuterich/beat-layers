import { useState } from "react";
import "./App.sass";

const times = [...Array(8).keys()].map((i) => 1 + i / 2);

function Track() {
  return (
    <div className="track">
      <select className="sound">
        <option>KbdSpaceBarModernUX.wav</option>
        <option>KbdFunction.wav</option>
      </select>
      <div className="timeline">
        {times.map((time) => (
          <div key={time}>{time}</div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPauseToggle() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="App">
      <button onClick={handlePlayPauseToggle}>
        {isPlaying ? "pause" : "play"}
      </button>
      <Track />
      <Track />
    </div>
  );
}

export default App;
