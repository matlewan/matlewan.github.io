import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Mateusz Lewandowski</h1>
        <p>Cześć, nazywam się Mateusz Lewandowski i witam Cię na mojej stronie domowej :)</p>
      </header>
      <main>
        <hr />
          <h2>Projekty</h2>
          <div class="project-group">
            <div class="project">
              <a href="/pomysl-grandprix/">Pomysł Grand Prix</a>
              <p>Analiza cyklicznych turniejów szachowych rozgrywanych w Poznaniu</p>
            </div>
          </div>
      </main>
      <footer>
        <div class="icons">
          <a href="https://github.com/matlewan">
            <img width="40px" class="icon" src="assets/github.svg" alt="github" />
          </a>
          <a href="mailto:matlewan7@gmail.com">
            <img width="40px" class="icon" src="assets/gmail.svg" alt="github" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
