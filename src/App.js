import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



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
    <>
    <div className="box">First Box 
        <a href="#" className="btn btn-dark btn-lg active" role="button" aria-pressed="true">Primary link</a>

    </div>
    <div className="box">Second Box </div>
    </>
  );
}

export default App;
