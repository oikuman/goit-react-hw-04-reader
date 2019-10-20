import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Reader from "./Reader";

import publications from "./publications.json";

function App(props) {
    return (
        <Switch>
            <Route
                path="/reader"
                render={props => <Reader {...props} items={publications} />}
            ></Route>

            <Redirect to={{ pathname: "/reader" }} />
        </Switch>
    );
}

export default App;
