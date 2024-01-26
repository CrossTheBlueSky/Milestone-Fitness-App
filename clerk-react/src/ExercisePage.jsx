import React from "react"
import ExerciseCard from "./ExerciseCard.jsx"
import Nav from "./Nav.jsx"
import {useLocation} from "react-router-dom"

function ExercisePage(props){
    const [exercises, setExercises] = React.useState([])
    const location = useLocation()


    React.useEffect(()=>getExercises(), [])

    function getExercises(){
        fetch("/api/exercises")
        .then(r=>r.json())
        .then(data => setExercises(data))
    }

    function deleteHandler(exercise){
        fetch(`/api/exercises/${exercise.id}`, {
            method: "DELETE"
        })
        setExercises(exercises.filter(e=>e.id !== exercise.id))
    }

    const userExercises = exercises.filter((e)=>e.user_id===props.user.id)

    const allExerciseCards = userExercises.map((e)=>{
        return <ExerciseCard key={e.id} deleteHandler={deleteHandler} id={e.id} get={getExercises} name={e.name} exercise={e} lastPerformed={e.last_performed} description={e.description} />
    })


    return(
        <div>
            <Nav />
            {allExerciseCards}
        </div>
    )
}

export default ExercisePage