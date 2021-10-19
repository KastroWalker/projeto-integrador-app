import { ThemeProvider } from "@emotion/react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import SingUp from "./pages/SingUp";
import Profile from "./pages/Profile";
import theme from "./styles/Theme";
import NotFound from "./pages/NotFound";
import { UserContextProvider } from "./contexts/userContext/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={SingUp} />
            <Route path="/not-found" component={NotFound} />
            <Layout>
              <Switch>
                <Route path="/conta" component={Profile} />
                <Route path="*">
                  <Redirect to="/not-found" />
                </Route>
              </Switch>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
};

export default App;
