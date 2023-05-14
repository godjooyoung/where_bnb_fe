import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import axios from "axios";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withcredentials = true;
root.render(
    <CookiesProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </CookiesProvider>
);