/*Ejercicio:
Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
nuevo elemento de la lista.
● Añade un botón al lado de cada elemento para eliminarlo de la lista.
*/

import React, { useState } from "react";

const Ejercicio3 = () => {
  const [textoInput, setTextoInput] = useState("");
  const [listaElementos, setListaElementos] = useState([]);

  const agregarElementoALista = () => {
    if (textoInput.trim() !== "") {
      setListaElementos([...listaElementos, textoInput]);
      setTextoInput("");
    }
  };

  const eliminarElementoPorIndice = (indiceAEliminar) => {
    setListaElementos(
      listaElementos.filter(
        (elementoEnIteracion, indiceActual) => indiceActual !== indiceAEliminar,
      ),
    );
  };

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          agregarElementoALista();
        }}
      >
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder="Escribe algo..."
          style={{ padding: "10px", fontSize: "16px", margin: "10px" }}
        />

        <button type="submit" style={{ padding: "10px 20px", margin: "10px" }}>
          Agregar
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listaElementos.map((elementoActual, indiceElemento) => (
          <li
            key={indiceElemento}
            style={{
              margin: "10px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>{elementoActual}</span>
            <button
              onClick={() => eliminarElementoPorIndice(indiceElemento)}
              style={{ padding: "5px 10px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio3;
