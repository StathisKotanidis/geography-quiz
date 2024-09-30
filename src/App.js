import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <StartingScreen />
    </div>
  );
}

function StartingScreen() {
  const [activeClass, setActiveClass] = useState([false, false, false]);

  useEffect(() => {
    // Trigger the first paragraph immediately
    setTimeout(() => setActiveClass((prev) => [true, false, false]), 0);

    // Trigger the second paragraph after 4.5s
    setTimeout(() => setActiveClass((prev) => [true, true, false]), 4500);

    // Trigger the third paragraph after 9s
    setTimeout(() => setActiveClass((prev) => [true, true, true]), 9000);
  }, []);

  return (
    <div className="starting-screen-container">
      <div className="quiz-title-container">
        <h1>🌍 Ultimate Geography Quiz</h1>
      </div>
      <div className="quiz-description-container">
        <div className="description-container">
          <p
            style={{ color: "yellow" }}
            className={activeClass[0] ? "typing" : "hidden"}
          >
            4 unique challenges
          </p>
        </div>
        <div className="description-container">
          <p
            style={{ color: "blue" }}
            className={activeClass[1] ? "typing" : "hidden"}
          >
            40 different questions
          </p>
        </div>
        <div className="description-container">
          <p
            style={{ color: "green" }}
            className={activeClass[2] ? "typing" : "hidden"}
          >
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
