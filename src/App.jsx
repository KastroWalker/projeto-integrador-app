import { ThemeProvider } from "@emotion/react";
import Login from "./pages/Login";
import theme from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
