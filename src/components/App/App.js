import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import MainPage from './views/MainPage/MainPage'
import UserPage from './views/UserPage/UserPage'
import PopUpPane from '../PopUpPane/PopUpPane'
import { getImages } from '../../ApiHelper/ApiHelper'
import { response } from '../../ApiHelper/test-data'

import './App.scss';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      foreignSet: [],
      savedSets: [],
      popUpTrigger: {show: ''}
    }
  }

  componentDidMount() {
    // getImages().then(images => {
    //   this.setState({foreignSet: images})
    // })
    this.setState({foreignSet: response})
  }

  render() {
    return (
      <main>
        <Header />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/set/:id">
          <MainPage />
        </Route>
        <Route exact path="/your-sets">
          <UserPage />
        </Route>
        {this.state.popUpTrigger.show === "save" && <PopUpPane />}
        {this.state.popUpTrigger.show === "about" && <PopUpPane />}
      </main>
    );
  }
  }

export default App;
 