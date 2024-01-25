import "./App.css"
import {useNavigate} from "react-router-dom"


function GoalCard(props){

    const navigate = useNavigate()
    const goalId = props.id

    function viewGoalHandler(){
        navigate(`/goal/${goalId}`, { state: props.goal })
        
    }

    function deleteHandler(){
        fetch(`api/goals/${goalId}`, {method: "DELETE"})
        props.get()
        navigate("/")
    }
    
    let progressVal = props.progress
    if (props.ready === true){
        progressVal = 100
    }

    return(
        <div>
             <article>
                <header>
                <h3 style={{textAlign: "left", margin: "0", padding:"0"}}>{props.name}</h3>
                </header>
                <div>
                    <p>{props.description}</p>
                    <progress value={progressVal.toString()} max="100"></progress>
                    {progressVal == 100 && <h5 style={{color : "green"}}>Ready to attempt!</h5>}
                </div>
                <footer>
                    <div style={{display: "flex"}}>
                    <button type="button" style={{margin: "10px"}} onClick={viewGoalHandler}>View Goal</button>
                    <button type="button" style={{margin: "10px"}} onClick={deleteHandler}>Delete Goal</button>
                    </div>

                </footer>
             </article>
        </div>
        )

}

export default GoalCard