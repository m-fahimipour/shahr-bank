import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Providers } from "./providers/Providers.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
