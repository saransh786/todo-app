import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Todos from "./components/Todos";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div className="App">
      <Alert alert={alert} />
      <h1>Todo App</h1>
      <Todos showAlert={showAlert} />
    </div>
  );
}

export default App;
