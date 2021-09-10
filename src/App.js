import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


// Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Comany";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";


function App() {
    return (

        <BrowserRouter>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/company">Empresa</Link>
                <Link to="/newproject">Novo projeto</Link>
            </ul>
            <Switch>
                <Container>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/company">
                        <Company />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/newproject">
                        <NewProject />
                    </Route>
                </Container>
            </Switch>
            <p>Footer</p>
        </BrowserRouter>
    );
}

export default App;
