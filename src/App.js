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
import cv from './ArthurGuerinCv.pdf';
import tete from './tete.jpg';
import { useEffect } from 'react';
import { useState } from 'react';
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
      <h5 className='col'>Puissance <br></br>4</h5>
      <a href='https://github.com/Arthuros727/Puissance4' target='blank' >

        <Button variant="primary" className='but'>Go</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='carte2'>

    <Card style={{ width: '30vw',heigh: '30vw', backgroundColor:"#47476d" }}>
      <Card.Img variant="top" src={om} />
      <Card.Body>
      <h5 className='col'>Jeu : <br></br>Osu!Mania</h5>
      <a href='https://github.com/Arthuros727/ProjectMania' target='blank' >

        <Button variant="primary" className='but'>Go</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
    <div className='carte3'>

<Card style={{ width: '30vw',heigh: '30vw', backgroundColor:"#47476d" }}>
  <Card.Img variant="top" src={mvc} />
  <Card.Body>
    {/* <div className='col'> */}

    <h5 className='col'>Framework <br></br>MVC</h5>
    {/* </div> */}
    <a href='https://github.com/Arthuros727/my-MVC-Framework' target='blank' >

    <Button variant="primary" className='but'>Go</Button>
    </a>
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
          <a href='https://github.com/Arthuros727/Puissance4' target='blank' >

          <h3 className='carou1'>Puissance 4</h3>
          <p className='carou1'>Grille modulable, customisation.</p>
          </a>
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
        <a href='https://github.com/Arthuros727/ProjectMania' target='blank' >

          <h3 className='carou1'>Jeu de Rythme (js)</h3>
          <p className='carou1'>Reproduction du jeu : Osu! mania</p>
          </a>
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
        <a href='https://github.com/Arthuros727/my-MVC-Framework' target='blank' >

          <h3 className='carou1'></h3>
          <p className='carou1'>
            Reproduction d'un framework php mvc from scratch
          </p>
          </a>
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
 
  let i = 0;
  const [displayStyle, setDisplayStyle] = useState('none');
  
  useEffect(() => {
    var w = window.innerWidth;

    
    let name = document.getElementById("name");
    name.classList.add("nameanim")

    let job = document.getElementById("job");
    job.classList.add("jobanim")

    let about = document.getElementById("about");
    about.classList.add("aboutanim")

    let project = document.getElementById("project");
    project.classList.add("projectanim")

    let call = document.getElementById("call");
    call.classList.add("callanim")

    let cv = document.getElementById("cv");
    cv.classList.add("cvanim")

    let txtq = document.getElementById("txtq");
    txtq.classList.add("txtqanim")

    let e1 = document.getElementById("e1");
    e1.classList.add("e1anim")
if(w < 1000){
  let div = document.getElementById("oo");
  setDisplayStyle("inline");

  
    div.classList.add('animate');
  
}

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // console.log(scrollY)
      

        if(scrollY <= 1500){
        let div = document.getElementById("oo");
          div.classList.remove('animate2');
          div.classList.add('animate');
        }
      
      if(w > 1000){
      if (scrollY >= 300) {
        let div = document.getElementById("oo");
        setDisplayStyle("inline");
  
        if (div) {
          div.classList.add('animate');
        }
      }}
      if(scrollY >= 1350){
        i++;
        let div = document.getElementById("oo");
        div.classList.remove('animate');
        div.classList.add('animate2');
        
  
      }


       
      
       
      
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  }, []);
  return (
    
    <div className='blur'>
     
      <div className='premier'>
      
      <img src={imgwebdev} className='imgbg'></img>
      <img src={html} className='html'></img>
      <img src={htmlv} className='htmlv'></img>
      <img src={css} className='css'></img>
      <img src={set} className='set'></img>


      <p className='name' id='name'>Arthur Guerin</p>
      <div className='blurIdea'>

      <p className='quoteUp'>"</p>
      <p className='textQuote' id='txtq'>Explorateur passionné du web, je crée des expériences digitales  uniques en tant que développeur Full Stack </p>
      <p className='quoteDown'>"</p>
      </div>

      <p className='job' id='job'>Web Developpeur</p>
      <a href='#e1' ><p className='about' id='about'>A propos de moi</p></a>
      <a href='#p4' ><p className='project' id='project'>Mes Projets</p></a>
      <a href='#e3'> <p className='call' id='call'>Me contacter</p> </a>
      <a href={cv} download={cv}>
      <p className='moncv' id='cv'>Mon CV</p>

            </a>



      
      </div>
{/* <img id='tete' src={tete}></img> */}
        <p className='aboutmetext' id='e1'>A propos de moi :</p>
      <div className={`aboutme ${displayStyle}`} id='oo' style={{ display: displayStyle }}>
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
      <div className='mecontacter'>
        <p className='contact' id='e3'>Me Contacter</p>
        <form action="https://public.herotofu.com/v1/49fdcbe0-046d-11ee-b0a7-9f000c4c1540" method="post" accept-charset="UTF-8" className='for'>
  <div>
    <label for="name" className='label'>Your Name</label>
    <textarea className='a' name="Name" id="name" type="text" required />
  </div>
  <div>
    <label for="email" className='label'>Your Email</label>
    <textarea className='a' name="Email" id="email" type="email" required  />
  </div>
  <div>
    <label for="email" className='label'>Objet</label>
    <textarea className='a' name="object" id="object" type="textarea" required  />
  </div>
  <div>
    <label for="email" className='label'>Mail</label>
    <textarea className='b' name="mail" id="mail" type="textarea" required  />
  </div>
  <div>
    <input type="submit" value="send" className='send'/>
    <div >
      <input hidden type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
    </div>
  </div>
</form>
      </div>
    </div>
  );
}

export default App;
