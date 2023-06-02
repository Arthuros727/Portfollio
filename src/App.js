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
import c from './C.png';
import trinity from './trinity.png';


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
      <a href='#e1' ><p className='about'>A propos de moi</p></a>
      <p className='project'>Mes Projects</p>
      <p className='call'>Me contacter</p>



      
      </div>

      <div className='aboutme'>
        <p className='aboutmetext' id='e1'>A propos de moi :</p>
        <div className='text'>
        <img src={c} className='c'></img>
        <img src={trinity} className='trinity'></img>
          <p>Arthur Guerin, Etudiant à la Web@cademie (by epitech), j'ai pu aquierire des <br></br> competences
            en PHP(natif,Symfony,Laravel), JS (natif,react,jquerry), mysql,<br></br> docker, nodejs, scss! 
            Ils m'ont aussi apporter le savoir faire en travail d'equipe <br></br>grace a different gros projet de groupe
            telle que une reproduction de Twitter,<br></br> d'un site de ecommerce, ou encore de Spotify !
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
