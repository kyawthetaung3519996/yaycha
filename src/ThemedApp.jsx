import { createContext, useState } from "react";
import App from "./App";

export const AppContent = createContext();

function ThemedApp() {
  const [mode, setMode] = useState("dark");

  return (
    <AppContent.Provider value={{mode, setMode}}>
      <App />
    </AppContent.Provider>
  );
}

export default ThemedApp;