import React from 'react';

import {BrowserRouter} from "react-router-dom";
import {Home} from "./Home";
import {Heros} from "./Heros";
import {ScoreBoard} from "./ScoreBoard";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {Menu} from "./Menu";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/heros" component={Heros}/>
          <Route path="/scoreboard" component={ScoreBoard}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
