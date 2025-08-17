import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  // Get API URL from environment variable
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Call backend
    fetch(`${API_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage(data.message);
        } else {
          setMessage("❌ API did not return success");
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("⚠️ Error fetching from backend");
      });
  }, [API_URL]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 CI/CD Demo Project</h1>
      <h2>Frontend (React + Vite)</h2>
      <p>Backend Response:</p>
      <pre style={{ fontSize: "18px", color: "green" }}>{message}</pre>
    </div>
  );
}

export default App;
