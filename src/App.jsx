import { ThemeProvider } from "@emotion/react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import SingUp from "./pages/SingUp";
import Profile from "./pages/Profile";
import theme from "./styles/Theme";
import NotFound from "./pages/NotFound";
import { UserContextProvider } from "./contexts/userContext/UserContext";
import { StoreContextProvider } from "./contexts/storeContext/StoreContext";
import CreateStore from "./pages/CreateStore";
import Store from "./pages/Store";

const App = () => {
  return (
    <UserContextProvider>
      <StoreContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/cadastro" component={SingUp} />
              <Route path="/not_found" component={NotFound} />
              <Layout>
                <Switch>
                  <Route path="/conta" component={Profile} />
                  <Route path="/nova_loja" component={CreateStore} />
                  <Route path="/home" component={Home} />
                  <Route path="/loja" component={Store} />
                  <Route path="*">
                    <Redirect to="/not_found" />
                  </Route>
                </Switch>
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </StoreContextProvider>
    </UserContextProvider>
  );
};

export default App;
