import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home"
import Quotes from "./pages/Quotes"
import Detail from "./pages/Detail";
import QuotesDetail from "./pages/QuotesDetail"
import AuthorDetail from "./AuthorDetail";

import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import Episodes from "./Episodes";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="dark" light expand="md" className="mb-3">
        <NavbarBrand className="text-white mx-5  text-decoration-none" href="/">Breaking</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <ul className="d-flex flex-column flex-md-row">
              <li>
                <Link className="text-white text-decoration-none" to="/">Characters</Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="/quotes">Quotes</Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="/episodes">Episodes</Link>
              </li>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* exact sadece / bu pet olduğunda yakala demektir */}
          <Route path="/char/:char_id" component={Detail} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/episodes" component={Episodes} />

          <Route exact path="/quotes/:quote_id" component={QuotesDetail} />
          <Route exact path="/quoteas/:author" component={AuthorDetail} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
