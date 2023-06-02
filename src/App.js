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
      <p className='project'>Mes Projets</p>
      <p className='call'>Me contacter</p>



      
      </div>

      <div className='aboutme'>
        <p className='aboutmetext' id='e1'>A propos de moi :</p>
        <div className='text'>
        <img src={c} className='c'></img>
        <img src={trinity} className='trinity'></img>
          <p className='txt1'>Arthur Guérin, étudiant à la Web@cademie (by Epitech), j'ai pu acquérir des <br></br>
           compétences en PHP (natif, Symfony, Laravel), JS (natif, React, jQuery), MySQL,<br></br>
            Docker, Node.js, et SCSS ! Ils m'ont aussi apporté le savoir-faire en travail d'équipe
            <br></br>grâce à différents gros projets de groupe tels qu'une reproduction de Twitter<br></br>
             d'un site de ecommerce, ou encore de Spotify !
          </p>
          <p className='txt2'>Leur devise est : Apprendre à apprendre, ce qui m'a aidé à me développer de mon côté et avec l'aide de l'equipe pedagogique (ils me donnent parfois des sujets) d'apprendre d'autres langages qui m'intéressent comme le C++ ou encore le C# (avec Unity), car j'aspire dans le futur à développer un jeu vidéo ! (meme si je fais deja quelque prototype !)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
