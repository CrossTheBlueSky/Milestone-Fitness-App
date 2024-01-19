

function ExerciseCard(props){
    return (
        <article>
            <header>
                {props.name}
            </header>
            {props.description}
        </article>
    )
}

export default ExerciseCard