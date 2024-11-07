import { useState } from 'react'
import './styles/style_main.scss'
import './styles/general.scss'

function App() {
  const [profilValue, setProfilValue] = useState({ display: 'none' });

  return (
    <div className="App">
      {/* Hintergrund */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Idee für Content */}


    {/* Content Startseite */}
    <div className="content-1">
      <h1>Willkomen bei Quizzify</h1>
      <div className="enter-muber">
        <input placeholder="Spiel Nummer"></input>
        <button className="start">Starten</button>
        <div className="faq-content-1">Wie bekomme ich eine Nummer? </div>
        <div className="new-quiz">Erstelle dein eigenes Quiz!</div>
      </div>
    </div>

    {/* Profilauswahl */}
    <div className="content-2" style={ profilValue }>
      <div className="field">
        <div className="pro-content">
          <img alt="" src="" className="profPic"></img>
          <i class="fa-solid fa-pen"></i> {/* Icon für Profilbild ändern */}
        </div>
        <input type="text" placeholder="Dein Name"></input>
        <button className="enter">Los Gehts</button>
      </div>
    </div>

    {/* Quiz */}

    <div className="content-3">
    
    </div>



      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React <br></br>Pobel 3.0
        </a>
      </header> */}
    </div>
  );
}

export default App;