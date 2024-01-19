

function WorkoutCard(props){

    return (
        <article>
            <header>
                <h3>{props.name}</h3>
            </header>
                <p>{props.description}</p>
        </article>
    )
}

export default WorkoutCard