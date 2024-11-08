import { useState } from "react";
import '../styles/style_start.scss'
import { Link, useNavigate } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

function StartPage() {
    const [gameID, setGameID] = useState("")
    const [alert, setAlert] = useState({
      style: { display: 'none' }, 
      serching: { display: 'none' },
      notfound: { display: 'none' },
      error: { display: 'none' }
    })
    // const result = useLoaderData()
    const navigate = useNavigate()
    const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const enterGame = async () => {
      if(gameID){
        setAlert({
          style: {  }, 
          searching: {  },
          notfound: { display: 'none' },
          error: { display: 'none' }
        })
        await delay(3000)
        navigate('/' + gameID)
      }else{
        setAlert({
          style: {  }, 
          searching: { display: 'none' },
          notfound: {  },
          error: { display: 'none' }
        })
        await delay(3000)
        setAlert({
          style: { display: 'none' }, 
          searching: { display: 'none' },
          notfound: {  },
          error: { display: 'none' }
        })
      }
    }
    return (
      <div>
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
  
      {/* Content Startseite */}
      <div className="content-1">
        <h1>Willkomen bei Quizzify</h1>
        <div className="enter-number">
          <input placeholder="Spiel-ID" type='text' onChange={(e) => setGameID(e.target.value)} className='game-id'></input>
          <button className="start" onClick={enterGame}>Starten</button>
          <div className="faq-content-1"><i className="fa-solid fa-circle-info"></i>Wie bekomme ich eine ID? </div>
          <Link className="new-quiz" to='/account'>Erstelle dein eigenes Quiz!</Link>
        </div>
      </div>

      {/* Alert wenn Spiel ID eingegeben */}
      <div className='alert' style={alert.style}>
          <div className='search'>
            <div className='search-text' style={alert.searching}>Spiel wird gesucht...</div> {/* Wenn gesucht */}
            <div className='error-search'style={alert.notfound}>Es wurde kein Spiel gefunden. <br></br>Bitte überprüfe deine Quiz-ID. </div> {/* Wenn nix gefunden */}
            <div className="loader" style={alert.searching}></div> {/* Wenn gesucht */}
            <div className='try-again' style={alert.error}>Erneut eingegeben</div>{/* Wenn nix gefunden */}
          </div>
      </div>
          {/* Wenn alter geöffnet, soll Hintergrund über normalen Hintergrund grau werden. color= #24242496  */}
    </div>
    );
  }
  
  export default StartPage;
  
//   export const startPageLoader = async () => {
//     return "test"
// }