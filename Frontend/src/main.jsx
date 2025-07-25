// main.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import App from './App.jsx';
import UserContext from './UserContext/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </StrictMode>
);
