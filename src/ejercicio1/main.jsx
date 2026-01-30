import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Ejercicio1 from "./ejercicio1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Ejercicio1 />
  </StrictMode>,
);
