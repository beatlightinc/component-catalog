import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Hello from './views/hello';

class App extends React.Component<{}, {}> {
  public render() {
    return(
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Hello} />
        </Switch>
      </Router>
    );
  }
}

export default App;
