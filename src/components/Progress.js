function Progress() {
  return (
    <div className="progress-bar">
      <progress max="40" value="0"></progress>
      <div className="score">
        <span>Question X/40</span>
        <span>Score: Y/40</span>
      </div>
    </div>
  );
}

export default Progress;
