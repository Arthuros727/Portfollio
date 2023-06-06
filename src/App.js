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
import Carousel from 'react-bootstrap/Carousel';
import imgp4 from './puissance4.png';
import om from './om.png';
import mvc from './mvc.png';
// import Card from 'react-bootstrap/Card';


import Image from 'react-bootstrap/Image'
import wave from './wave4.png'

function Carte() {
  return (
    <div className='carr'>

    <div className='carte1'>

    <Card style={{ width: '30vw',heigh: '30vw', backgroundColor:"#47476d" }}>
      <Card.Img variant="top" src={imgp4} />
      <Card.Body>
        <Card.Title>Puissance <br></br>4</Card.Title>
       
        <Button variant="primary" className='but'>Go</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carte2'>

    <Card style={{ width: '30vw',heigh: '30vw', backgroundColor:"#47476d" }}>
      <Card.Img variant="top" src={om} />
      <Card.Body>
        <Card.Title>Jeu : <br></br>Osu!Mania</Card.Title>
        
        <Button variant="primary" className='but'>Go</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='carte3'>

<Card style={{ width: '30vw',heigh: '30vw', backgroundColor:"#47476d" }}>
  <Card.Img variant="top" src={mvc} />
  <Card.Body>
    <Card.Title>Framework <br></br>MVC</Card.Title>
    
    <Button variant="primary" className='but'>Go</Button>
  </Card.Body>
</Card>
</div>
    </div>
  );
}
function Carou() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id='p4'
          src={imgp4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carou1'>Puissance 4</h3>
          <p className='carou1'>Grille modulable, customisation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='p4'
          className="d-block w-100"
          src={om}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='carou1'>Jeu de Rythme (js)</h3>
          <p className='carou1'>Reproduction du jeu : Osu! mania</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='p4'
          className="d-block w-100"
          src={mvc}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='carou1'></h3>
          <p className='carou1'>
            Reproduction d'un framework php mvc from scratch
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
function Card1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
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

      <div className='mesproj'>
        <p className='projets'>Quelque Projets</p>
        <div className='borderp'>
          <div className='card1'>
          <Carou className="abc"/>
          

          <Carte />
         

          </div>
          {/* <Card1 />
          <Card1 />
          <Card1 /> */}

        </div>
      </div>
    </div>
  );
}

export default App;
