import { useState } from "react";
import '../styles/style_start.scss'
import { useNavigate } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

function StartPage() {
    const [gameID, setGameID] = useState("")
    // const result = useLoaderData()
    const navigate = useNavigate()
    const enterGame = () => {
      if(gameID){
        navigate('/game/' + gameID)
      }else{
        alert("Gib etwas ein, um einem Spiel beizutreten.")
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
          <div className="faq-content-1"><i class="fa-solid fa-circle-info"></i>Wie bekomme ich eine ID? </div>
          <div className="new-quiz">Erstelle dein eigenes Quiz!</div>
        </div>
      </div>
    </div>
    );
  }
  
  export default StartPage;
  
//   export const startPageLoader = async () => {
//     return "test"
// }