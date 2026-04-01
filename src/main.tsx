import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// @ts-ignore - Store root on container to avoid createRoot error during HMR
if (!container.__reactRoot) {
  // @ts-ignore
  container.__reactRoot = createRoot(container);
}

// @ts-ignore
container.__reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
