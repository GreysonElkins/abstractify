import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import MainPage from './views/MainPage/MainPage'
import UserPage from './views/UserPage/UserPage'
import PopUpPane from '../PopUpPane/PopUpPane'
import { getImages } from '../../ApiHelper/ApiHelper'
import { response } from '../../test-data/fetch-response'

import './App.scss';
import bg from '../../images/header-bg.gif'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: [],
      foreignSet: [],
      savedSets: [],
      popUpTrigger: "",
      isGaudy: true,
    };
  }

  render() {
    if (this.state.isGaudy) {
      document.body.style.backgroundImage = `url(${bg})`
    } else {
      document.body.style.backgroundImage = ``
    }

    return (
      <main>
      {this.state.popUpTrigger 
        && <div 
          className="fade"
          onClick={() => {
            const fix = this.state.popUpTrigger === "About" ? 5 : 2;
            this.hidePopUp(fix)
          }}
        >
        </div>
      }
        <Header
          title={this.state.title}
          showPopUp={this.showPopUp}
          refresh={this.refreshForeignSet}
          isGaudy={this.state.isGaudy}
          toggleGaudy={this.toggleGaudy}
          glitch={this.glitchLetter}
        />
        <Route exact path="/">
          <MainPage
            images={this.state.foreignSet}
            toggleImageLock={this.toggleImageLock}
          />
        </Route>
        <Route exact path="/set/:id">
          <MainPage />
        </Route>
        <Route exact path="/your-sets">
          <UserPage />
        </Route>
        {this.state.popUpTrigger === "About" && (
          <PopUpPane 
            show={this.state.popUpTrigger} 
            hide={this.hidePopUp}
            isGaudy={this.state.isGaudy}
            />
            )}
        {this.state.popUpTrigger === "Save" && (
          <PopUpPane 
            show={this.state.popUpTrigger} 
            hide={this.hidePopUp}
            save={this.saveSet}
            isGaudy={this.state.isGaudy}
          />
        )}
        
      </main>
    );
  }

  componentDidMount() {
    this.loadTitle();
    // this.refreshForeignSet()
    this.setState({ foreignSet: response });
  }

  refreshForeignSet = () => {
    this.markLoadedImagesSeen();
    if (this.checkQuantityUnseen() < 20) {
      getImages().then((images) => {
        this.setState({ foreignSet: images });
      });
    }
    this.glitchLetter(true);
  };

  checkQuantityUnseen = () => {
    return this.state.foreignSet.reduce((unseenQty, img) => {
      if (!img.seen) unseenQty++;
      return unseenQty;
    }, 0);
  };

  identifyImagesOnPage = () => {
    const loaded_imgs = document.querySelectorAll("img");
    const visibleIds = [];
    loaded_imgs.forEach((node) => {
      visibleIds.push(node.id);
    });
    return visibleIds
  }

  markLoadedImagesSeen = () => {
    const matchIds = this.identifyImagesOnPage()

    const updateSet = this.state.foreignSet.map((img) => {
      if (matchIds.includes(img.id.toString()) && !img.locked) {
        img.seen = true;
      }
      return img;
    });
    this.setState({ foreignSet: updateSet });
  };

  toggleImageLock = (id) => {
    const update = this.state.foreignSet.map((img) => {
      if (img.id === id) {
        img.locked = img.locked ? false : true;
      }
      return img;
    });
    this.setState({ foreignSet: update });
    this.glitchLetter(true);
  };

  saveSet = (provided_title) => {
    const visibleIds = this.identifyImagesOnPage()
    const newSet = {
      title: provided_title,
      images: this.state.foreignSet.filter(img => {
          if (visibleIds.includes(img.id)) return img
        }),
      created_at: Date.now()
    }
    const update = [...this.state.savedSets, newSet]
    this.setState({savedSets: update})
  }

  showPopUp = (key, num) => {
    this.glitchLetter(false, num)
    this.setState({ popUpTrigger: key })
  }

  hidePopUp = (num) => {
    this.glitchLetter(true, num)
    this.setState({ popUpTrigger: '' })
  }

  loadTitle = () => {
    for (let i = 0; i < 11; i++) {
      this.glitchLetter(false, i);
      for (let j = 0; j < this.randomIndex(4); j++) {
        setTimeout(() => {
          this.glitchLetter(false, i);
          this.glitchLetter(true, i);
        }, this.randomInterval(j === 0 ? 1000 : undefined));
      }
    }
  };

  glitchLetter = (fix, index = this.randomIndex(11)) => {
    const glitchTitle = this.state.title;
    const letterLimit = () => {
      return letterOptions[index.toString()].length;
    };
    glitchTitle[parseInt(index)] =
      letterOptions[index.toString()][this.randomIndex(letterLimit())];
    this.setState({ title: glitchTitle });
    if (fix) this.correctLetter(index);
  };

  correctLetter = (index) => {
    setTimeout(() => {
      const fixTitle = this.state.title;
      fixTitle[parseInt(index)] = letterOptions[index][0];
      this.setState({ title: fixTitle });
    }, this.randomInterval());
  };

  randomIndex = (limit) => {
    let index = Math.floor(Math.random() * (limit - 2) + 1);
    return index.toString();
  };

  randomInterval = (max = 3000, min = 200) => {
    return Math.random() * (max - min) + min;
  };

  toggleGaudy = () => {
    this.glitchLetter(true)
    this.glitchLetter(true)
    this.glitchLetter(true)
    this.setState({ isGaudy: this.state.isGaudy ? false : true });
  };
}

  const letterOptions = {
    0: ["A", "^", "@", "ˆ"],
    1: ["B", "3", "ß"],
    2: ["S", "5", "§", "š"],
    3: ["T", "†", "#"],
    4: ["R", "®", "&"],
    5: ["A", "^", "@", "ˆ"],
    6: ["C", "©", "[", "{", "(", "¢"],
    7: ["T", "†", "#"],
    8: ["I", "!", "1", "|", "/", "¦"],
    9: ["F", "=", "±", "?", "#", "ƒ", "‡"],
    10: ["Y", "Ÿ", "µ", "¥"],
  };

export default App;
 