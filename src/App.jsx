import { useState } from 'react';
import './App.css';
import './Navbar.css';

function About() {
  return (<>
      <img src="/photo.jpg" width={250} alt="zdjęcie autora strony"/>
      <p className='about'>
        Cześć, witaj na mojej stronie!<br/>
        Mam na imię Mateusz Lewandowski i od 2018 roku zawodowo zajmuję się programowaniem.
        W wolnym czasie lubię grać w szachy i piłkę nożną. Zapraszam do kontaktu.
      </p>
      <p className="contact">
        E-mail: <a href="mailto:matlewan7@gmail.com">matlewan7@gmail.com</a><br/>
        Github: <a href='https://github.com/matlewan'>matlewan</a><br />
        Codingame: <a href='https://www.codingame.com/profile/19315a6d70b5677fb10ec57c3b1fd0978384844'>matlewan7</a>
      </p>
  </>)
}

function Projects() {
  return (
    <div className="projects">
      <h2>Projekty</h2>
      <div className="project-group">
        <div className="project">
          <a href="/pomysl-grandprix/">Pomysł Grand Prix</a>
          <p>Analiza cyklicznych turniejów szachowych rozgrywanych w Poznaniu</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [Container, setContainer] = useState(<About />);
  return (
    <>

      <header>
        <nav className="navbar">
          <ul className="navbar-links">
            <li onClick={() => setContainer(<About />)}>O mnie</li>
            <li onClick={() => setContainer(<Projects />)}>Projekty</li>
          </ul>
        </nav>
      </header>
      <main>
        {Container}
      </main>
      
    </>
  );
}

export default App;
