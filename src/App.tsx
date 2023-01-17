import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppRouter } from "./Router/Router";
import MainLayout from "./layouts/MainLayout/MainLayout";

import style from "./App.module.scss";

const App = () => {
  const theme = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
