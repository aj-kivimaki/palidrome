import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="app">
      <main className="main">
        <h1>PALINDROME CHECKER</h1>
        <Input searchTerm={searchTerm} search={handleSearch} />
        <Label searchTerm={searchTerm.toUpperCase()} />
      </main>
    </div>
  );
}

export default App;
