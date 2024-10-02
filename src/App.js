import { useReducer } from "react";
import "./App.css";
import StartingScreen from "./components/StartingScreen";
import Challenge1 from "./components/Challenge1";

const initialState = {
  status: "waitingToStart",
  questions: [],
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "startChallengeOne":
      return {
        ...state,
        status: "playingFirstChallenge",
        questions: action.payload,
      };
    default:
      return "Not a valid action";
  }
}

export default function App() {
  const [{ status, questions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      {status === "waitingToStart" && <StartingScreen dispatch={dispatch} />}
      {status === "playingFirstChallenge" && (
        <Challenge1 dispatch={dispatch} questions={questions} index={index} />
      )}
    </div>
  );
}
