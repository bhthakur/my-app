import { useState } from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "16:00",
    },
  ]);
  const reverse= () => {
    setTodos([...todos].reverse());
  }
  return (
    <div className="App">
      'Create form'
    </div>
  );
}

export default App;
