import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class MP3Player extends Component {
  render(){
    return(
      <h1>{this.props.title}</h1>
    );
  }
}

ReactDOM.render(<MP3Player title="MP3 Music Player"/>  , document.getElementById('root'));
registerServiceWorker();
