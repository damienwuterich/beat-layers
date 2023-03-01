import { useState } from "react";
import "./App.sass";

function Track() {
  return (
    <div className="track">
      <div className="sound">
        <select>
          <option>KbdSpaceBarModernUX.wav</option>
          <option>KbdFunction.wav</option>
        </select>
      </div>
      <div className="timeline">
        <div>1</div>
        <div>&</div>
        <div>2</div>
        <div>&</div>
        <div>3</div>
        <div>&</div>
        <div>4</div>
        <div>&</div>
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
