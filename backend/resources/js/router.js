import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Example from  './pages/Example';
import Home from  './pages/Home';

function App() {
    return (
        <div>
            <Switch>
                <Route path="/example" exact>
                    <Example></Example>
                </Route>
                <Route path="/" exact>
                   <Home></Home>
                </Route>
            </Switch>
        </div>
    )
}

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))