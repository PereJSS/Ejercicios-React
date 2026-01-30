/*Ejercicio:
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
"Multiplicar", y "Dividir".
● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
área de texto o debajo de los botones.
● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
*/

import React, { useState } from "react";

const Ejercicio5 = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const manejarOperacion = (operacion) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      setResultado("Por favor, ingresa ambos números.");
      return;
    }
    let resultadoOperacion;
    switch (operacion) {
      case "sumar":
        resultadoOperacion = num1 + num2;
        break;
      case "restar":
        resultadoOperacion = num1 - num2;
        break;
      case "multiplicar":
        resultadoOperacion = num1 * num2;
        break;
      case "dividir":
        if (num2 === 0) {
          setResultado("Error: División por cero no permitida.");
          return;
        }
        resultadoOperacion = num1 / num2;
        break;
      default:
        return;
    }
    setResultado(`Resultado: ${resultadoOperacion}`);
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
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        placeholder="Número 1"
        style={{ padding: "10px", fontSize: "16px", margin: "10px" }}
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        placeholder="Número 2"
        style={{ padding: "10px", fontSize: "16px", margin: "10px" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <button
          onClick={() => manejarOperacion("sumar")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Sumar
        </button>
        <button
          onClick={() => manejarOperacion("restar")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Restar
        </button>
        <button
          onClick={() => manejarOperacion("multiplicar")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Multiplicar
        </button>
        <button
          onClick={() => manejarOperacion("dividir")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Dividir
        </button>
      </div>
      {resultado && <h2 style={{ marginTop: "20px" }}>{resultado}</h2>}
    </div>
  );
};

export default Ejercicio5;
