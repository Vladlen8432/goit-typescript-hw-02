import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Тип для елемента root, що є типом HTMLDivElement або null
const rootElement = document.getElementById("root");

// Перевіряємо чи елемент існує перед рендерингом
if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
