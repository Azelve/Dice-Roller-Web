import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import diceImg from "../assets/images/dice.png";
import doubleImg from "../assets/images/double-dice.png";
import numberImg from "../assets/images/number.png";
import { Container, Drawer, SPA } from "./style";

import Dice from "../views/Dice";
import Double from "../views/Double";
import Generator from "../views/NumberG";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Dice!</div>,
    main: Dice,
  },
  {
    path: "/double-dice",
    sidebar: () => <div>Double!</div>,
    main: Double,
  },
  {
    path: "/number-generator",
    sidebar: () => <div>Number Generator!</div>,
    main: Generator,
  },
];

const Routes = () => {
  return (
    <Router>
      <Container>
        <Drawer>
          <ul>
            <li>
              <img src={diceImg} alt="Dice" height="130px" width="130px" />
              <Link to="/">Dice</Link>
            </li>
            <li>
              <img
                src={doubleImg}
                alt="Double Dice"
                height="120px"
                width="120px"
              />
              <Link to="/double-dice">Double Dice</Link>
            </li>
            <li>
              <img
                src={numberImg}
                alt="Number Generator"
                height="90px"
                width="90px"
              />
              <Link to="/number-generator">
                Number
                <br />
                Generator
              </Link>
            </li>
          </ul>
          <div>
            <a href="https://www.instagram.com/espelhoinvertido" target="blank">
              &copy; Espelho Invertido
            </a>
          </div>
        </Drawer>

        <SPA>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </SPA>
      </Container>
    </Router>
  );
};

export default Routes;
