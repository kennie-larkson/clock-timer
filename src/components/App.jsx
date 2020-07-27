import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function callTimer() {
    return setTime(new Date().toLocaleTimeString());
  }

  setInterval(() => callTimer(), 1000);

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={callTimer}>Get Time</button>
    </div>
  );
}

export default App;
