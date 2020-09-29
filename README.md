[![Build Status](https://travis-ci.org/GreysonElkins/abstractify.svg?branch=master)](https://travis-ci.org/GreysonElkins/abstractify)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
​
<br />
<p align="center">
  <a href="https://github.com/GreysonElkins/abstractify">
    <img src="./ReadMe-assets/logo.gif" alt="Abstractify logo" width="100%">
  </a>
​
  <p align="center">
    <br />
    <br />
    <a href="https://abstractify.herokuapp.com/">Go To Site</a>
    ·
    <a href="https://github.com/GreysonElkins/abstractify/issues">Report Bug</a>
    ·
    <a href="https://github.com/GreysonElkins/abstractify/issues">Request Feature</a>
  </p>
</p>

​
## Table of Contents
​
* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Additional Resources](#acknowledgements)
​
​

## About The Project
​
Abstractify is a moodboard for abstract painters. The app allows users to load sets of images, choose images to prevent from being refreshed, and save their favorite combinations. The project is an exploration in handling image elements, utilizing flat data models in a React app, a demonstration of Router, and a practice in asynchronous testing. 
​
### Built With
* [React](reactjs.org)
* [Router](https://github.com/ReactTraining/react-router#readme)
* [Sass](github.com/sass/dart-sass)
* [Pexel API](https://www.pexels.com/api/)
​
<!-- GETTING STARTED -->
## Getting Started
​
To get a local copy up and running follow these step.
​
### Prerequisites
​
Make sure you have recieved a free API key from [Pexel](https://www.pexels.com/api/)
​
### Installation
​
1. Clone the repo
```sh
git clone git@github.com:GreysonElkins/abstractify.git
```
2. Install NPM packages
```sh
npm install
```
3. Create a file in `src/ApiHelper` called `API_KEY.js` and add this code block:
```JS
export const ApiKey = 'ENTER YOUR API KEY'
```
4.  Add the new file to `.gitignore` 

5. Run `npm start` to launch the app locally, run `npm test` to work with the test files.
​
<!-- USAGE EXAMPLES -->
## Usage
​
 ### Refresh the images you don't care for, keep the ones you dig
 <img src="./ReadMe-assets/refresh+lock2.gif" alt="refreshing and locking images" width="100%" />

 ### Find a combo you like? Save it!
 <img src="./ReadMe-assets/saving2.gif" alt="saving " width="100%" />

 ### Maybe purple and orange aren't the vibe you're feeling - turn off gaudy mode!
 <img src="./ReadMe-assets/gaudy mode.gif" alt="changing " width="100%" />
​
<!-- ROADMAP -->

## Roadmap

We hope to develope Abstractify into an app with tools which allow users to interact with the data of an image; ideally we'll be taking content from the API and morphing into something truly modular / abstract
​
See the [open issues](https://github.com/greysonelkins/abstractify/issues) for a full list of proposed features (and known issues).
​

<!-- CONTRIBUTING -->
## Contributing
​
1. Clone the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
​
<!-- CONTACT -->
## Contact
​
Greyson Elkins - [@GreysonElkins](https://twitter.com/GreysonElkins) - greysonelkins@gmail.com
​​
<!-- ACKNOWLEDGEMENTS -->
## Additional Resources
* [Moment.js](momentjs.com)
* [React-router-dom](reactrouter.com)
* [Prop-types](https://www.npmjs.com/package/prop-types)
* [Becris's Lock Icons](https://www.flaticon.com/authors/becris)

[forks-shield]: https://img.shields.io/github/forks/GreysonElkins/abstractify.svg?style=flat-square
[forks-url]: https://github.com/GreysonElkins/abstractify/network/members
[stars-shield]: https://img.shields.io/github/stars/GreysonElkins/abstractify.svg?style=flat-square
[stars-url]: https://github.com/GreysonElkins/abstractify/stargazers
[issues-shield]: https://img.shields.io/github/issues/GreysonElkins/abstractify.svg?style=flat-square
[issues-url]: https://github.com/GreysonElkins/abstractify/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/greyson-elkins/
[product-screenshot]: images/screenshot.png
