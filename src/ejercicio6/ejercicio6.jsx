/*Ejercicio:
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar”
y “Reiniciar”.
• Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
• “Pausar” detiene el conteo pero mantiene el tiempo actual.
• “Reiniciar” pone el temporizador en 00:00:00.*/

import React, { useState } from "react";

const Ejercicio6 = () => {
  const [tiempo, setTiempo] = useState(0);
  const [intervaloId, setIntervaloId] = useState(null);
  const iniciarTemporizador = () => {
    if (intervaloId) return; // Evitar múltiples intervalos
    const id = setInterval(() => {
      setTiempo((prevTiempo) => prevTiempo + 1);
    }, 1000);
    setIntervaloId(id);
  };
  const pausarTemporizador = () => {
    if (intervaloId) {
      clearInterval(intervaloId);
      setIntervaloId(null);
    }
  };
  const reiniciarTemporizador = () => {
    pausarTemporizador();
    setTiempo(0);
  };
  const formatoTiempo = (segundos) => {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const secs = String(segundos % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
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
      <h2 style={{ fontSize: "4em", fontFamily: "monospace" }}>
        {formatoTiempo(tiempo)}
      </h2>
      <div>
        <button
          onClick={iniciarTemporizador}
          style={{ padding: "15px 25px", margin: "10px", fontSize: "18px" }}
        >
          Iniciar
        </button>

        <button
          onClick={pausarTemporizador}
          style={{ padding: "15px 25px", margin: "10px", fontSize: "18px" }}
        >
          Pausar
        </button>
        <button
          onClick={reiniciarTemporizador}
          style={{ padding: "15px 25px", margin: "10px", fontSize: "18px" }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Ejercicio6;
