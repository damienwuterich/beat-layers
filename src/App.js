import "./App.sass";

function Track() {
  return (
    <div className="track">
      <div className="sound"></div>
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
  return (
    <div className="App">
      <Track />
      <Track />
    </div>
  );
}

export default App;
