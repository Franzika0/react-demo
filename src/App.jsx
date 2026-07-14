import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    try {
      const response = await fetch("http://localhost:2000/hello");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Failed to connect to backend");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React Demo</h1>

      <button onClick={callBackend}>
        Get Message
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;