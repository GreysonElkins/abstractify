import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Header from '../Header/Header'
import MainPage from './views/MainPage/MainPage'
import UserPage from './views/UserPage/UserPage'
import PopUpPane from '../PopUpPane/PopUpPane'
import { getImages, cleanPhotos } from '../../ApiHelper/ApiHelper'
import { response } from '../../test-data/cleaned-response'

import './App.scss';
import bg from '../../images/header-bg.gif'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      foreignSet: [],
      savedSets: [],
      popUpTrigger: "",
      isGaudy: true,
      api_error: ''
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
        {this.state.popUpTrigger && (
          <div
            className="fade"
            onClick={() => {
              const fix = this.state.popUpTrigger === "About" ? 5 : 2;
              if(!this.state.api_error) this.hidePopUp(fix);
            }}
          ></div>
        )}
        <Route 
          render={({ history }) => {
            return <Header
              title={this.state.title}
              showPopUp={this.showPopUp}
              refresh={this.refreshForeignSet}
              isGaudy={this.state.isGaudy}
              toggleGaudy={this.toggleGaudy}
              glitch={this.glitchLetter}
              page={history.location.pathname}
            />
          }}
        />
        <Switch>
          <Route exact path="/">
            <MainPage
              images={this.state.foreignSet}
              toggleImageLock={this.toggleImageLock}
            />
          </Route>
          <Route 
            exact path="/set/:id" 
            render={({ match }) => {
              if (this.presentSavedImages(match.params.id)) {
                return <MainPage
                  images={this.presentSavedImages(match.params.id)}
                  toggleImageLock={this.toggleImageLock}
                />
              } else {
                return <PopUpPane
                  show={"Sorry"}
                  hide={this.hidePopUp}
                  errorMessage={"That set wasn't found"}
                  isGaudy={this.state.isGaudy}
                />;
              }
            }}
          >
          </Route>
          <Route exact path="/your-sets">
            <UserPage imageSets={this.state.savedSets} />
          </Route>
          <Route 
            // path="/*" 
            render={() => {
              return (
                <PopUpPane
                  show={"Sorry"}
                  hide={this.hidePopUp}
                  errorMessage={"That page does not exist"}
                  isGaudy={this.state.isGaudy}
                />
              )
            }
          }>
          </Route>
        </Switch>
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
        {this.state.popUpTrigger === "Save" && (
          <PopUpPane
            show={this.state.popUpTrigger}
            hide={this.hidePopUp}
            save={this.saveSet}
            isGaudy={this.state.isGaudy}
          />
        )}
        {this.state.api_error && (
          <PopUpPane
            show={this.state.popUpTrigger}
            errorMessage={this.state.api_error}
            hide={this.hidePopUp}
            save={this.saveSet}
            isGaudy={this.state.isGaudy}
          />
        )}
      </main>
    );
  }

  componentDidMount() {
    this.loadTitle()
    this.refreshForeignSet()
    // this.setState({ foreignSet: response });
  }

  refreshForeignSet = () => {
    this.markLoadedImagesSeen();
    if (this.checkQuantityUnseen() < 20 || this.state.foreignSet.length < 0) {
      getImages(this.handleApiScrewUPs).then((serverData) => {
        if (serverData) {
          const updatedSet = [...this.state.foreignSet, ...serverData]
          this.setState({ foreignSet: updatedSet });
        } 
      })
    }
    this.glitchLetter(true);
  };

  handleApiScrewUPs = (api_response) => {
    console.log("I got this far!", api_response)
    if (api_response.status === 401) {
      this.setState({
        popUpTrigger: "Server error 401",
        api_error: `We aren't able to authorize with the server, please 
                  check back later, or if running locally, see the ReadMe.`,
      });
    } else if (api_response.status === 403) {
      this.setState({
        popUpTrigger: "Server error 403",
        api_error: `The authorization key you provided isn't being 
                  recognized, please check your credentials`,
      });
    } else if (api_response.message) {
      this.setState({
        popUpTrigger: "Error",
        api_error: api_response.message,
      });
    } else {
      this.setState({
        popUpTrigger: `Server error ${api_response.status} `,
        api_error:
          "Something unexpected happened, please check" +
          "Pexels API documentation for more information",
      });
    }
  }

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
      visibleIds.push(parseInt(node.id));
    });
    return visibleIds
  }

  markLoadedImagesSeen = () => {
    const matchIds = this.identifyImagesOnPage()

    const updateSet = this.state.foreignSet.map((img) => {
      if (matchIds.includes(img.id)) {
        img.seen = true;
      }
      return img;
    });
    this.setState({ foreignSet: updateSet });
  };

  toggleImageLock = (id) => {
    const update = this.state.foreignSet.map(img => {
      if (img.id === id) {
        img.lockedIndex = img.lockedIndex > -1 ? undefined : this.findLockIndex(id);
      }
      return img;
    });
    this.setState({ foreignSet: update });
    this.glitchLetter(true);
  };

  findLockIndex(id) {
    const visibleIds = this.identifyImagesOnPage()
    return visibleIds.indexOf(id)
  }

  saveSet = (provided_title) => {
    const visibleIds = this.identifyImagesOnPage()
    const newSet = {
      id: this.findSetId(),
      title: provided_title,
      images: this.state.foreignSet.reduce((ids, img) => {
          if (visibleIds.includes(img.id)) {
            ids.push(img.id)
          }
          return ids
        }, []),
      created_at: Date.now()
    }
    const update = [...this.state.savedSets, newSet]
    this.setState({ savedSets: update })
  }

  findSetId = () => {
    const savedSets = this.state.savedSets
    if (savedSets.length > 0) {
      let sorted = this.state.savedSets.sort((a, b) => b.id - a.id)
      return sorted[0].id + 1
    } else {
      return 1 
    }
  }

  showPopUp = (key, num) => {
    this.glitchLetter(false, num)
    this.setState({ popUpTrigger: key })
  }

  hidePopUp = (num) => {
    this.glitchLetter(true, num)
    this.setState({ popUpTrigger: '' })
  }

  presentSavedImages = (id) => {
      const setInQuestion = this.state.savedSets.find(set => set.id === parseInt(id))
      if (setInQuestion) {
        const images = this.state.foreignSet.filter(img => setInQuestion.images.includes(img.id))
        return images
      } else {
        return undefined
      }
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