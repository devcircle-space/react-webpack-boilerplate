import { createRoot } from "react-dom/client";

import App from "./App";

import "./global.css";

createRoot(document.getElementById("_root") as HTMLElement).render(<App />);

