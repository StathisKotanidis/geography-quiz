import { useState, useEffect } from "react";

function StartingScreen({ dispatch }) {
  const [activeClass, setActiveClass] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setTimeout(() => setActiveClass((prev) => [true, false, false]), 0);
    setTimeout(() => setActiveClass((prev) => [true, true, false]), 3500);
    setTimeout(() => setActiveClass((prev) => [true, true, true]), 7000);
    setTimeout(() => setActiveClass((prev) => [true, true, true, true]), 10500);
    setTimeout(
      () => setActiveClass((prev) => [true, true, true, true, true]),
      13500
    );
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
            Challenge 1: Test your knowledge with 10 unique geography-related
            questions.
          </p>
        </div>
        <div className="description-container">
          <p
            style={{ color: "blue" }}
            className={activeClass[1] ? "typing" : "hidden"}
          >
            Challenge 2: Can you match the correct flag to its country? Show off
            your flag recognition skills in this visual challenge.
          </p>
        </div>
        <div className="description-container">
          <p
            style={{ color: "green" }}
            className={activeClass[2] ? "typing" : "hidden"}
          >
            Challenge 3: Name the capitals! Given a country, you'll need to
            choose the correct capital city from the options provided.
          </p>
        </div>
        <div className="description-container">
          <p
            style={{ color: "orange" }}
            className={activeClass[3] ? "typing" : "hidden"}
          >
            Challenge 4: Estimate the population! For each country or city,
            select the closest population from the given choices.
          </p>
        </div>
        <div className="description-container">
          <p
            style={{ color: "purple" }}
            className={activeClass[4] ? "typing" : "hidden"}
          >
            Are you ready to play?
          </p>
        </div>
      </div>
      <div className="start-button-container">
        <button
          className="startBtn"
          onClick={() => dispatch({ type: "startChallengeOne" })}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default StartingScreen;
