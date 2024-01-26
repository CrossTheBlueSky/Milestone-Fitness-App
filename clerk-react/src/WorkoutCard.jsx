

function WorkoutCard(props){

const allExercises = props.exercises.map((e)=>{
    return <li key={e.id}>{e.exercise.name}</li>
    
    
})
    return (
        <article>
            <header>
                <h3>{props.workout.name}</h3>
                <p>{props.workout.description}</p>
            </header>
                <h6 style={{margin:"0"}}>Date Performed:</h6>
                {props.workout.date_performed}
                <h6 style={{marginTop: "30px"}}>Exercises Performed:</h6>
                {allExercises}
                <ul>
                </ul>
            <footer>
                <button onClick={()=>props.deleteHandler(props.id)}>Delete</button>
            </footer>
        </article>
    )
}

export default WorkoutCard