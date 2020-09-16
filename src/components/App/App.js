import React, { Component } from 'react';
import Header from '../Header/Header'
import MainPage from './views/MainPage/MainPage'
import UserPage from './views/UserPage/UserPage'
import PopUpPane from '../PopUpPane/PopUpPane'

import './App.scss';

class App extends Component {
  
  render() {
    return (
      <main>
        <Header />
        <MainPage />
        <UserPage />
        <PopUpPane />
      </main>
    );
  }
  }

export default App;
 