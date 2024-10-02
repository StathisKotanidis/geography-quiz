import Progress from "./Progress";
import Loader from "./Loader";
import { useEffect, useState } from "react";

// I was getting some weird entitites in some questions so i had to use this function i found
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function Challenge1({ dispatch, questions, index }) {
  const [loading, setLoading] = useState(true);

  // fetching the trivia api data using dispatch
  useEffect(() => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
    getQuestions();
  }, [dispatch]);

  console.log(questions); // just to see if i get the data correct
  console.log(typeof questions); // OBJ

  if (!questions || questions.length === 0 || !questions[index]) {
    return <Loader />;
  }

  // created a single array to store the correct/incorrect answers together
  let options = [
    questions[index].correct_answer,
    ...questions[index].incorrect_answers,
  ];

  console.log(options); // just to check if my option work correctly

  return (
    <div className="challenge-container">
      <h2>Challenge 1</h2>
      <Progress />
      {loading ? (
        <Loader />
      ) : (
        <div className="challenge1-quiz">
          <h3>{decodeHTML(questions[index].question)}</h3>
          <span>Answer1</span>
          <span>Answer2</span>
          <span>Answer3</span>
          <span>Answer4</span>
        </div>
      )}
    </div>
  );
}

export default Challenge1;
