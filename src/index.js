import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './AuthContext';

const root = document.getElementById('root');

// Replace ReactDOM.render with createRoot().render
const createRoot = ReactDOM.createRoot(root);

createRoot.render(<App />);