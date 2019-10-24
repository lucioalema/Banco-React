import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientesContainer from './containers/ClientesContainer';
import LoginContainer from './containers/LoginContainer';
import './App.css';
import ClientesList from './components/ClientesList';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderLogin = () => <h1>Login</h1>;

  renderClientesContainer = () => <h1>Clientes Container</h1>;

  renderCustomerListContainer = () => <h1>Customers List Container</h1>;

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/clientes" component={ClientesContainer} />
          <Switch>
            <Route path="/clientes/new" component={this.renderCustomerContainer} />
            <Route path="/clientes/:dni" 
                    render={props => <ClientesList dni={props.match.params.dni} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
