import { createRoot } from "react-dom/client";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root not found for React");
}

const ReactDOM = createRoot(root);

/**
 * В данном пет-проекте нет необходимости в маршрутизации (react-router-dom), однако было добавлено для полноты
 *
 */

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
