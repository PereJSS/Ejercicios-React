/*Ejercicio:
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
línea.*/

import React, { useState } from "react";

const Ejercicio8 = () => {
  const [text, setText] = useState("");

  const charCount = text.replace(/\s+/g, "").length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <h2>Contador de Caracteres y Palabras</h2>
      <textarea
        rows="10"
        cols="50"
        placeholder="Escribe un párrafo aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        <p>Número de caracteres (sin espacios): {charCount}</p>
        <p>Número de palabras: {wordCount}</p>
      </div>
    </div>
  );
};

export default Ejercicio8;
