import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [databaseStatus, setDatabaseStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then((response) => {
        setBackendStatus(response.ok ? "Healthy" : "Unhealthy");
      })
      .catch(() => {
        setBackendStatus("Offline");
      });

    fetch("http://localhost:5000/database")
      .then((response) => {
        setDatabaseStatus(response.ok ? "Healthy" : "Unhealthy");
      })
      .catch(() => {
        setDatabaseStatus("Offline");
      });
  }, []);

  return (
    <div className="dashboard">
      <header>
        <h1>🚀 DevOps Dashboard</h1>
        <p>Dockerized application monitoring</p>
      </header>

      <main>
        <div className="card">
          <h2>Frontend</h2>
          <p className="status healthy">● Running</p>
          <p>React + Vite</p>
        </div>

        <div className="card">
          <h2>Backend</h2>
          <p className="status healthy">● {backendStatus}</p>
          <p>Python + Flask</p>
        </div>

        <div className="card">
          <h2>Database</h2>
          <p className="status healthy">● {databaseStatus}</p>
          <p>PostgreSQL</p>
        </div>

        <div className="card">
          <h2>Containerization</h2>
          <p className="status healthy">● Docker</p>
          <p>Docker Engine</p>
        </div>
      </main>
    </div>
  );
}

export default App;