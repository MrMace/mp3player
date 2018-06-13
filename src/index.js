import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class SlideMarquee extends Component {
  render(){
    return(
      <section className="music-marquee">
      <div className="headings">
      {this.props.mp3Artist} - {this.props.children} ({this.props.mp3Genre})
      </div>
      </section>
    );
  }
}

class MP3Player extends Component {
  render(){
    return(
      <div className="audio-contain">
      <h1>{this.props.title}</h1>
      <SlideMarquee mp3Artist="Artsist Name" mp3Genre="Hip Hop">What What</SlideMarquee>
      </div>
    );
  }
}

ReactDOM.render(<MP3Player title="MP3 Music Player"/>  , document.getElementById('root'));
registerServiceWorker();
