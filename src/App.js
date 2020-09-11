import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import Profile from './pages/profilepage';
import Docs from './pages/docspage';
import { setUser } from './redux/actions';

const App = ({ currentUser, setUser }) => {
  useEffect(() => {
    setUser()
  }, [setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage} >
            {
              currentUser ? <Redirect to="/home" /> : <HomePage/>
            }
          </Route>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/dashboard/profile" component={Profile} />
          <Route exact path="/dashboard/docs" component={Docs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { setUser })(App);