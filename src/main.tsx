import "@/tailwind.css";

import { createRoot } from "react-dom/client";

import { App } from "@/app";

const root: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(<App/>)