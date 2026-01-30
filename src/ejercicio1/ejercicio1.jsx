/*Ejercicio:
Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el
botón, el color de fondo de la página debe cambiar a un color aleatorio.*/
import React, { useState } from "react";

const Ejercicio1 = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const cambiarColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <button
        onClick={cambiarColor}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Cambiar color
      </button>
    </div>
  );
};

export default Ejercicio1;
