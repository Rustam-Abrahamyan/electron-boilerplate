import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import App from "./App";

const container = document.getElementById("root");

if (!container) throw Error("Root element not found.");

const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
