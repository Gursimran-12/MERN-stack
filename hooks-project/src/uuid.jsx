import { useState } from "react";
import { v4 as uuid } from "uuid";

function IdGenerator() {
  const [id, setId] = useState("");

  function generateId() {
    setId(uuid());
  }

  return (
    <div>
      <button onClick={generateId}>Generate UUID</button>
      <h3>{id}</h3>
    </div>
  );
}

export default IdGenerator;
