
function MilestoneRibbon(props){

    const allExercises = props.exercises.map((exercise) => { 
        return <li key={exercise.name}>{exercise.name}</li>}
        )

       const randomProgress = Math.floor(Math.random() * 100).toString()

    return(
        <>
        <h6>{props.name}</h6>
        <progress value={randomProgress} max="100"></progress>
        <ul><strong>Related Exercises</strong>
            {allExercises}
        </ul>
        </>
    )
}

export default MilestoneRibbon