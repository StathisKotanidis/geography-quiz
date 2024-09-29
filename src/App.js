import "./App.css";

export default function App() {
  return (
    <div className="App">
      <StartingScreen />
    </div>
  );
}

function StartingScreen() {
  return (
    <div className="starting-screen-container">
      <div className="quiz-title-container">
        <h1> 🌍 Ultimate Geography Quiz</h1>
      </div>
      <div className="quiz-description-container">
        <div className="description-container">
          <p style={{ color: "yellow" }} className="typing">
            4 unique challenges
          </p>
        </div>

        <div className="description-container">
          <p style={{ color: "blue" }} className="typing">
            40 different questions
          </p>
        </div>

        <div className="description-container">
          <p style={{ color: "green" }} className="typing">
            Are you ready to play?
          </p>
        </div>
      </div>
      <div className="start-button-container">
        <button className="startBtn">Start</button>
      </div>
    </div>
  );
}
