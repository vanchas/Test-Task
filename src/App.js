import React from 'react';
import './App.scss';
import AdminImages from './pages/AdminImages';
import AdminImage from './pages/AdminImage'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <AdminImages />
          </Route>
          <Route path="/images/:id">
            <AdminImage />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
