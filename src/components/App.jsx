import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClicked() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClicked}>Submit</button>
    </div>
  );
}

export default App;
