import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Your App.jsx (unchanged content pasted from PDF)

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("❌ Root element not found — Check public/index.html for <div id='root'>");
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
