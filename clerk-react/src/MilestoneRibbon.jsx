import React from 'react'
function MilestoneRibbon(props){


  

 



    

    if(props.completed === true){

        return(
            <>
            <h6>{props.name}</h6> 
             </>
        )


    }

    const allExercises = props.milestone.exercises.map(exercise=>{
        return <li key={exercise.id}>{exercise.exercise.name} </li>
    })


    return(
        <>
        <article>
        <header>
        <h6>{props.name}</h6>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <button onClick={()=>props.completedHandler(props.milestone)}>Mark as Completed</button>
        <button onClick={()=>props.deleteHandler(props.milestone)}>Delete</button>
        </div>
        </header>
        <ul><strong>Related Exercises</strong>
            {allExercises}
        </ul> 
        </article>
        </>
    )
}

export default MilestoneRibbon