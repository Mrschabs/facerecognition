import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Naviagtion';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


// const app = new Clarifai.App({
//   apiKey: 'c7ac325f970746c5be7232869bca51b4'
// });

const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }


 onInputChange = (event) => {
  console.log(event.target.value);
 }

 onButtonSubmit = () => {
  let app = new Clarifai.App({
    apiKey: "c7ac325f970746c5be7232869bca51b4",
  });

  app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      // THE JPG
      "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
    {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
