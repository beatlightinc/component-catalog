import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Root from './root';

class App extends React.Component<{}, {}> {
  public render() {
    return(
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </Router>
    );
  }
}

export default App;
