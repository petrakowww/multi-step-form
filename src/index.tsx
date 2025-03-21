import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root not found for React');
}

/**
 * В данном пет-проекте нет необходимости в маршрутизации (react-router-dom), однако было добавлено для полноты
 *
 */

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
