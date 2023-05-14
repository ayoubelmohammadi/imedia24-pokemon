import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import store from "./store";
import {Provider} from 'react-redux';
import {CssBaseline} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createTheme({palette: {mode: 'dark'}});
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Provider>,
);
