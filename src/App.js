import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import imgwebdev from './me.png';
import html from './html.png';
import htmlv from './htmlv.png';
import css from './css.png';
import set from './set.png';

import Image from 'react-bootstrap/Image'
import wave from './wave4.png'

function App() {
  return (
    
    <div className='blur'>
     
      <div className='premier'>
      
      <img src={imgwebdev} className='imgbg'></img>
      <img src={html} className='html'></img>
      <img src={htmlv} className='htmlv'></img>
      <img src={css} className='css'></img>
      <img src={set} className='set'></img>


      <p className='name'>Arthur Guerin</p>
      <div className='blurIdea'>

      <p className='quoteUp'>"</p>
      <p className='textQuote'>dkfjdlkfndpkfnpjiojpo <br></br> dlkddksjdlkssdlkjsdlkj</p>
      <p className='quoteDown'>"</p>
      </div>

      <p className='job'>Web Developpeur</p>

      
      </div>
    </div>
  );
}

export default App;
