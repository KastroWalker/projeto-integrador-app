import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SingUp from "./pages/SingUp";
import theme from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={SingUp} />
          <Route path="/conta" component={Profile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
