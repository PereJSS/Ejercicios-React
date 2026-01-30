/*Ejercicio:
Crea una página con un campo de texto y una lista predefinida de elementos.
● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
mostrar solo los elementos que contienen el texto. */

import React, { useState } from "react";

const Ejercicio4 = () => {
  const [filtroTexto, setFiltroTexto] = useState("");
  const listaElementosPredefinida = [
    "Manzana",
    "Banana",
    "Naranja",
    "Mango",
    "Pera",
    "Uva",
    "Piña",
    "Cereza",
  ];
  const listaFiltrada = listaElementosPredefinida.filter((elemento) =>
    elemento.toLowerCase().includes(filtroTexto.toLowerCase()),
  );
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
      <input
        type="text"
        value={filtroTexto}
        onChange={(e) => setFiltroTexto(e.target.value)}
        placeholder="Filtrar elementos..."
        style={{ padding: "10px", fontSize: "16px", margin: "20px" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listaFiltrada.map((elementoActual, indiceElemento) => (
          <li
            key={indiceElemento}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            {elementoActual}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio4;
