import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { loading } from "./assets/functions/loading.tsx";

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("Checked") == "true") {
    loading("loading");
  }
  else {
    loading("starter");
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
