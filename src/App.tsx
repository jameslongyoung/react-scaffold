import * as React from 'react';
import {Provider} from 'react-redux';
import {IndexCtlFactory} from './entry/ctlComponents/index';
import {Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import {rootStoreFactory} from './store';
import {history} from './store';
class App extends React.Component {
  public render() {
    return (
      <Provider store = {rootStoreFactory()}>
        <ConnectedRouter history = {history}>
          <Route path = '/' exact = {true} component = {IndexCtlFactory} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
