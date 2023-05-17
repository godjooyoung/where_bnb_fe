import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { UrlProvider } from './components/UrlContext';
import { SearchProvider } from '../src/providers/SearchContext'
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withcredentials = true;
root.render(
    <SearchProvider>
    <UrlProvider>
    <CookiesProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </CookiesProvider>
    </UrlProvider>
    </SearchProvider>
);