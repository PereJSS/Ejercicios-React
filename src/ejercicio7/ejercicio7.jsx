/*Ejercicio:
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
diga “Generar contraseña”.
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4.
*/

import React, { useState } from "react";

const Ejercicio7 = () => {
  const [length, setLength] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  const generatePassword = () => {
    const len = parseInt(length, 10);
    if (isNaN(len) || len < 4) {
      setError("La longitud debe ser mayor o igual a 4.");
      setPassword("");
      return;
    }

    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
      specialChars;
    let generatedPassword = "";

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }
    setPassword(generatedPassword);
    setError("");
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
      <h2>Generador de Contraseñas</h2>
      <input
        type="number"
        placeholder="Longitud de la contraseña"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <button onClick={generatePassword}>Generar contraseña</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {password && (
        <div>
          <h3>Contraseña Generada:</h3>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default Ejercicio7;
