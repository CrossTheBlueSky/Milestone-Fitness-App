import {useNavigate} from "react-router-dom"

function ExerciseCard(props){

    const navigate = useNavigate()

    function deleteHandler(){
        fetch(`api/exercises/${props.id}`, {method: "DELETE"})
        navigate('/exercises')
        props.get()

    }
    return (
        <article>
            <header>
                {props.name}
            </header>
            <p>{props.description}</p>
            <h6>Last Performed:</h6>
            {props.lastPerformed}
            <footer>
                <button type="button" onClick={()=>deleteHandler(props.exercise)}>Delete</button>
            </footer>
        </article>
    )
}

export default ExerciseCard