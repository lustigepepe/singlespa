import React, { useState, useEffect } from "react";
import "./app.css";
import e from "../../event-bus";

const App = () => {
  const [message, setMessage] = useState(
    "When Angular receives message, we should see a confirmation here 👈"
  );

  useEffect(() => {
    e.on("messageFromAngular", setMessage);
    return () => e.off("messageFromAngular", setMessage);
  }, []);

  const sendMessage = () => {
    e.emit("messageFromReact", "Hello from React 👌");
  };

  return (
    <div style={{ margin: "0 30px 0 30px" }}>
      <div
        style={{
          margin: "10px 0 40px 0",
          display: "inline-block",
          width: "460px"
        }}
      >
        <h1>This was written in React</h1>
        <p>
          <button onClick={sendMessage}>Send a message to Angular</button>
        </p>
        <p>{message}</p>
      </div>
      <img
        style={{
          display: "inline-block",
          width: "30%",
          padding: "0 100px 0 100px",
          width: "200px"
        }}
        src="../../public/reactLogo512.png"
        alt="react Logo"
      />
    </div>
  );
};
export default App;
