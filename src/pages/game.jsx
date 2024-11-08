import { useParams } from "react-router-dom"

function Game(){
    const params = useParams()
    return(
        <div>
            {params.id}
        </div>
    )
}

export default Game