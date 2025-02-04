import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './pages/PlayerContext';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API_KEY;
console.log(clerkFrontendApi)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
    <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
    </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
