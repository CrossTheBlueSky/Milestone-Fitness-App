import "./App.css"
import {useNavigate} from "react-router-dom"


function GoalCard(props){

    const navigate = useNavigate()


    function clickHandler(){
        navigate(`/goal/${props.id}`, { state: props })
        
    }

    return(
        <div onClick={clickHandler}>
             <article>
                <header>
                    <h3>{props.name}</h3>
                </header>
                <div>
                    <p>{props.description}</p>
                </div>
                <footer>
                <progress value="25" max="100"></progress>
                </footer>

             </article>
        </div>
        )

}

export default GoalCard