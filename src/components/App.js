import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import PageNotFound from './PageNotFound';

import { handleFetchInitialData } from '../actions/shared';
import '../styles/App.css';

class App extends Component {

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'New Question', route: '/add' },
    { label: 'Leader Board', route: '/leaderboard' }
  ];

  componentDidMount() {
    this.props.dispatch(handleFetchInitialData());
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.props.fetchedData && (
          !this.props.authedUser
            ? <Login />
            : ( 
              <div>
                <Nav items={this.navItems} />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/add" element={<NewQuestion />} />
                  <Route path="/leaderboard" element={<LeaderBoard />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </div>
            )
        )}
      </div>
    );
  }
}

export default connect(({ fetchedData, authedUser }) => ({
  fetchedData,
  authedUser
}))(App);
