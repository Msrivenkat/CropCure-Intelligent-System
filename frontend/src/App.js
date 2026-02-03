import React, { useState } from "react";
import { predictDisease } from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleTest = async () => {
    try {
      const response = await predictDisease();
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError("API call failed");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Crop Disease Detection</h2>

      <button onClick={handleTest}>Test Django API</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <b>Disease:</b> {result.disease}
          </p>
          <p>
            <b>Fertilizer:</b> {result.fertilizer}
          </p>
          <p>
            <b>Prevention:</b> {result.prevention}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
