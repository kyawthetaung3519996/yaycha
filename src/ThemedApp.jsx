import { createContext, useContext, useMemo, useState } from "react";
import App from "./App";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Snackbar,
} from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import AppDrawer from "./components/AppDrawer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import Home from "./pages/Home";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);

function ThemedApp() {
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("dark");
  const [showDrawer, setShowDrawer] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(null);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        }
      },
    });
   }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showForm,
          setShowForm,
          mode,
          setMode,
          showDrawer,
          setShowDrawer,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
        }}>
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default ThemedApp;