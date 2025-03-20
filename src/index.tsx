import { createRoot } from "react-dom/client";
import { App } from "./app";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root not found for React");
}

const container = createRoot(root);

container.render(<App />);
