import React from 'react'

function MilestoneRibbon(props){

    const [exercises, setExercises] = React.useState([])

    React.useEffect(()=>{
        getExercises()
    }, [])

    function getExercises(){
        fetch(`/api/exercises`)
        .then(r=>r.json())
        .then(data=>setExercises(data))
    }


    const allExercises = exercises.map((exercise) => { 
        return  <>
        <li key={exercise.name}>{exercise.name}</li>
        </>
        }
        )


    return(
        <>
        <h6>{props.name}</h6>
        {props.completed || <button onClick={()=>props.completedHandler(props.milestone)}>Mark as Completed</button>}
        <ul><strong>Related Exercises</strong>
            {allExercises}
        </ul>
        </>
    )
}

export default MilestoneRibbon