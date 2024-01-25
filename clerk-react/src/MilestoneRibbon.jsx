import React from 'react'
import ListItem from './ListItem.jsx'
function MilestoneRibbon(props){


    React.useEffect(()=>{oneGet()}, []) 
    const [exercises, setExercises] = React.useState([])
    function getExercises(){
        fetch(`/api/exercises`)
        .then(r=>r.json())
        .then(data=>setExercises(data))
    }


    function oneGet(){

        if (props.completed == false){

            getExercises()

        }
    }

  

    const allExercises = exercises.map(exercise=>{
            return <ListItem key={exercise.id} value={exercise.name} />
        })



    

    if(props.completed === true){

        return(
            <>
            <h6>{props.name}</h6> 
             </>
        )


    }


    return(
        <>
        <h6>{props.name}</h6>
        <button onClick={()=>props.completedHandler(props.milestone)}>Mark as Completed</button>
        <ul><strong>Related Exercises</strong>
            {allExercises}
        </ul> 
        </>
    )
}

export default MilestoneRibbon