import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withcredentials = true;
root.render(
    <Provider store={store}>
    <CookiesProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </CookiesProvider>
    </Provider>
);