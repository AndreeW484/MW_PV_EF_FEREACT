import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Elaboración de un tema personalizado para un mejor atractivo visual
const theme = createTheme({
  palette: {
    background: {
      default: '#800080', 
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Century Gothic, Arial, sans-serif',
    h4: {
      fontWeight: 'bold',
    },
    button: {
      fontWeight: 'bold',
      fontSize: '3em',
    },
    body1: {
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

// Envolver la aplicación en el ThemeProvider y aplicar el pequeñito tema que se elaboro
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
