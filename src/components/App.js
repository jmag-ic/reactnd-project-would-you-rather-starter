import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import PageNotFound from './PageNotFound';
import QuestionPage from './QuestionPage';

import { handleFetchInitialData } from '../actions/shared';
import '../styles/App.css';

class App extends Component {

  static propTypes = {
    fetchedData: PropTypes.bool.isRequired
  }

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
                  <Route path='/questions/:id' element={<QuestionPage />} />
                  <Route path="/page-not-found" element={<PageNotFound />} />
                  <Route path="*" element={<Navigate to="/page-not-found" />} />
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
