import axios from "axios";
import React, { useState } from "react";

export function App() {
  const [input, setInput] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(input) => setInput(input.target.value)} />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
