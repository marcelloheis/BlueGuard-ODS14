import { useEffect, useState } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";

function App() {
  const [status, setStatus] = useState("Carregando...");

  useEffect(() => {
    axios.get("/api/health")
      .then(res => setStatus(res.data.message))
      .catch(() => setStatus("API offline"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🌊 BlueGuard Dashboard</h1>
      <p>Status da API: <strong>{status}</strong></p>
      <hr />
      <LoginForm />
    </div>
  );
}

export default App;

