import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Ad from "./components/Ad/index";
import Otro from "./Page/Otro/index";

function App() {
  const [nombre, setNombre] = useState("Diego");
  const [contador, setContador] = useState(0);

  // const handleCount = () => {
  //   setContador(contador + 1)
  // }

  function handleCount() {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <Otro />
      {/* <h1>Hola {nombre}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleCount}>Contar</button>
        <h1>Contando hasta : {contador}</h1>
        <div className="ads">
          <Ad />
          <Ad />
          <Ad />
          <Ad />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header> */}
    </div>
  );
}

export default App;
