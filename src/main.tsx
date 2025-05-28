//@React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//------------------------------------------------------

//@Component
import { Providers } from "~/providers/Providers";
//-------------------------------------------------------

//@Styles
import "./index.css";
//-------------------------------------------------------

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
