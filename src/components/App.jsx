import React, { useState } from "react";

function App() {
  
//   Input useState()
  const [name, setName] = useState("");
  
//   Button click useState()
  const [headingText, setHeadingText] = useState("");
  
//   Mouse effect using React Hooks ( useState() ),Ternary operator and conditional rendering
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChanged(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClicked() {
    setHeadingText(name);

    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClicked}>
        <input
          onChange={handleChanged}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handleClicked}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
