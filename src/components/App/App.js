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
    this.markLoadedImagesSeen() 
    if (this.checkQuantityUnseen() < 20) {
      getImages().then(images => {
        this.setState({ foreignSet: images })
      })
    }
  }

  checkQuantityUnseen = () => {
    return this.state.foreignSet.reduce((unseenQty, img) => {
      if (!img.seen) unseenQty++
      return unseenQty
    }, 0)
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
          <MainPage 
            images={this.state.foreignSet} 
            refresh={this.refreshForeignSet}
          />
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
 