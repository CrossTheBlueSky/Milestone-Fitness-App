import React from "react"
import ExerciseCard from "./ExerciseCard.jsx"
import Nav from "./Nav.jsx"
import {useLocation} from "react-router-dom"

function ExercisePage(){
    const [exercises, setExercises] = React.useState([])
    const location = useLocation()


    React.useEffect(()=>{
        fetch("/api/exercises")
        .then(r=>r.json())
        .then(data => setExercises(data))
    })

    const allExerciseCards = exercises.map((e)=>{
        return <ExerciseCard key={e.id} id={e.id} name={e.name} description={e.description} />
    })


    return(
        <div>
            <Nav />
            {allExerciseCards}
        </div>
    )
}

export default ExercisePage