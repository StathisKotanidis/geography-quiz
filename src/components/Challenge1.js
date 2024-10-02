import Progress from "./Progress";
import { useEffect, useState } from "react";

function Challenge1({ dispatch, questions }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple"
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Couldn't fetch the questions");
        }
        dispatch({ type: "startChallengeOne", payload: data.results });
      } catch (err) {
        console.error(err.message);
      }
    }
    getQuestions();
  }, [dispatch]);

  return (
    <div className="challenge-container">
      <h2>Challenge 1</h2>
      <Progress />
      <div className="challenge1-quiz">
        <h3>Question</h3>
        <span>Answer1</span>
        <span>Answer2</span>
        <span>Answer3</span>
        <span>Answer4</span>
      </div>
    </div>
  );
}

export default Challenge1;
