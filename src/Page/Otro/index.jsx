/*

Crear componente que va a mostrar 3 botones con los nombres rojo, azul, amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo

*/

import { useState } from "react";
import "./style.css";

const Otro = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(0);

  const handleShow = () => {
    setShow(!show);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h1>Card: {color}</h1>
      <button onClick={() => changeColor(1)} className="btn_red btn">
        Rojo: {color == 1 ? "Ocultar" : "Mostrar"}
      </button>
      <button onClick={() => changeColor(2)} className="btn_blue btn">
        Azul: {color == 2 ? "Ocultar" : "Mostrar"}
      </button>
      <button onClick={() => changeColor(3)} className="btn_green btn">
        Verde: {color == 3 ? "Ocultar" : "Mostrar"}
      </button>
      <br />
      <div className="card_wrapper">
        {color == 1 && <div className="card_red card"></div>}
        {color == 2 && <div className="card_blue card"></div>}
        {color == 3 && <div className="card_green card"></div>}
      </div>
    </div>
  );
};

export default Otro;
