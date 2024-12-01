import "../assets/styles/index.css";

import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import router from "./router.tsx";

createRoot(globalThis.document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </StrictMode>,
);
