import { useState } from 'react'
import './styles/style_main.scss'
import './styles/general.scss'
import 'https://kit.fontawesome.com/3034a52bcb.js'

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

      {/* Idee für Content, BITTE ALLE GRÜNEN TEXTE BEACHTEN*/}


    {/* CONTENT-1 Startseite, bei altert display:none */}
    <div className="content-1">
      <h1>Willkomen bei Quizzify</h1>
      <div className="enter-number">
        <input placeholder="Spiel-ID" type='text' className='game-id'></input>
        <button className="start">Starten</button>
        <div className="faq-content-1"><i class="fa-solid fa-circle-info"></i>Wie bekomme ich eine ID? </div>
        <button className="new-quiz">Erstelle dein eigenes Quiz!</button>
      </div>

      {/* Alert wenn Spiel ID eingegeben */}
      <div className='alert' style={profilValue} >
          <div className='search'>
            <div className='search-text'>Spiel wird gesucht...</div> {/* Wenn gesucht */}
            <div className='error-search' style={profilValue}>Es wurde kein Spiel gefunden. <br></br>Bitte überprüfe deine Quiz-ID. </div> {/* Wenn nix gefunden */}
            <div className="loader" ></div> {/* Wenn gesucht */}
            <div className='try-again' style={profilValue}>Erneut eingegeben</div>{/* Wenn nix gefunden */}
          </div>
      </div>
    </div>
    {/* Wenn alter geöffnet, soll Hintergrund über normalen Hintergrund grau werden. color= #24242496  */}






    {/* CONTENT-2 Profilauswahl*/}
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



    {/* CONTENT-3 Quiz */}
    <div className="content-3">
      <div className='content-quiz'>

      </div>
    </div>


    {/* Ende */}
    </div>
  );
}

export default App;