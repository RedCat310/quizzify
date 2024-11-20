import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import '../styles/host.scss'
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Host() {
    const navigate = useNavigate()
    const [quiz, setQuiz] = useState(0)
    const [loader, setLoader] = useState({
        display: 'none'
    })
    const testData = [
        {
            id: 0,
            name: "Test Quiz 1",
            questions: [
                {
                    question: "Testfrage1",
                    time: 10,
                    answers: [
                        { type: false, value: "Antwort 1(falsch)" },
                        { type: false, value: "Antwort 2(falsch)" },
                        { type: true, value: "Antwort 3(richtig)" },
                        { type: false, value: "Antwort 4(falsch)" },
                    ]
                },  
                {
                    question: "Testfrage2",
                    time: 20,
                    answers: [
                        { type: true, value: "Antwort 1(richtig)" },
                        { type: false, value: "Antwort 2(falsch)" },
                        { type: false, value: "Antwort 3(falsch)" },
                        { type: false, value: "Antwort 4(falsch)" },
                    ]
                }, 
                {
                    question: "Testfrage3",
                    time: 30,
                    answers: [
                        { type: false, value: "Antwort 1(falsch)" },
                        { type: true, value: "Antwort 2(richtig)" },
                        { type: false, value: "Antwort 3(falsch)" },
                        { type: false, value: "Antwort 4(falsch)" },
                    ]
                },  
                {
                    question: "Testfrage4",
                    time: 20,
                    answers: [
                        { type: false, value: "Antwort 1(falsch)" },
                        { type: false, value: "Antwort 2(falsch)" },
                        { type: false, value: "Antwort 3(falsch)" },
                        { type: true, value: "Antwort 4(richtig)" },
                    ]
                },               
            ]
        },
        {
            id: 1,
            name: "Test Quiz 2",
            questions: [
                {
                    question: "Testfrage1",
                    answers: [
                        { type: false, value: "Antwort 1(falsch)" },
                        { type: false, value: "Antwort 2(falsch)" },
                        { type: true, value: "Antwort 3(richtig)" },
                        { type: false, value: "Antwort 4(falsch)" },
                    ]
                },  
                {
                    question: "Testfrage2",
                    answers: [
                        { type: true, value: "Antwort 1(richtig)" },
                        { type: false, value: "Antwort 2(falsch)" },
                        { type: false, value: "Antwort 3(falsch)" },
                        { type: false, value: "Antwort 4(falsch)" },
                    ]
                }, 
                {
                    question: "Testfrage3",
                    answers: [
                        { type: false, value: "Antwort 1(falsch)" },
                        { type: true, value: "Antwort 2(richtig)" },
                        { type: false, value: "Antwort 3(falsch)" },
                        { type: false, value: "Antwort 4(falsch)" },
                    ]
                },  
                {
                    question: "Testfrage4",
                    answers: [
                        { type: false, value: "Antwort 1(falsch)" },
                        { type: false, value: "Antwort 2(falsch)" },
                        { type: false, value: "Antwort 3(falsch)" },
                        { type: true, value: "Antwort 4(richtig)" },
                    ]
                },               
            ]
        },
    ]
    useEffect(() => {
        onAuthStateChanged(auth, (d) => {
            if(d){
                
            }else{
                navigate("/account/login")
            }
        })
    })
    const startQuiz = async () => {
        setLoader({ display: 'block' })

        let id = 0
        let data = null
        let run = true
        while(run){
            id = Math.random().toString().slice(2,10)
            data = await getDoc(doc(db, id, "data"))
            if(!data.exists()){
                run = false
            }
        }
        let newData = testData[quiz]
        newData.status = "quiz"
        delete newData.id
        await setDoc(doc(db, id, "data"), newData)
        navigate("/account/host/" + id)
    }
    return ( <div>
        <div className="header">Hoste dein Quiz</div>
        <div className="btn-host">Hosten</div>

        <div className="pop-up-host" style={{ display: "block" }}>
            <div className="id-hosting">
                <div className="id-hosting-content">
                    <div className="text-1">Wähle das Quiz, dass gehostet werden soll.</div>
                    <select value={quiz} onChange={(e) => setQuiz(e.target.value)} className="select-quiz">
                        {testData.map((quiz) => (
                            <option key={quiz.id} value={quiz.id}>{ quiz.name }</option>
                        ))}
                    </select>
                    <div className="bestätigen-host" onClick={() => startQuiz()}>Los Gehts!</div>
                </div>
            </div>
        </div>

        <div className="alert" style={loader}>
            <div className="loader"></div><br></br><br></br>

            <div className="search-text-host">ID wird erstellt...</div>
        </div>
    </div> );
}

export default Host;