/*Ejercicio:
Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada
vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics
realizados.
*/

import React, { useState } from "react";

const Ejercicio2 = () => {
  const [contador, setContador] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Clics: {contador}</h2>
      <button
        onClick={() => setContador(contador + 1)}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Contar clics
      </button>
    </div>
  );
};

export default Ejercicio2;
