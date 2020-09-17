import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import MainPage from './views/MainPage/MainPage'
import UserPage from './views/UserPage/UserPage'
import PopUpPane from '../PopUpPane/PopUpPane'
import { getImages } from '../../ApiHelper/ApiHelper'
import { response } from '../../test-data/fetch-response'

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
    // this.refreshForeignSet()
    this.setState({foreignSet: response})
  }
  
  refreshForeignSet = () => {
    getImages().then(images => {
      this.setState({ foreignSet: images })
    })
  }

  markLoadedImagesSeen = () => {
    const loaded_imgs = document.querySelectorAll('img')
    const matchIds = []
    loaded_imgs.forEach(node => {
      matchIds.push(node.id)
    })

    const updateSet = this.state.foreignSet.map(img => {  
      if (matchIds.includes(img.id.toString())) {
        img.seen = true
      }
      return img
    })
    this.setState({ foreignSet: updateSet })
  }

  render() {
    return (
      <main>
        <Header refresh={this.refreshForeignSet} />
        <Route exact path="/">
          <MainPage images={this.state.foreignSet}/>
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
 