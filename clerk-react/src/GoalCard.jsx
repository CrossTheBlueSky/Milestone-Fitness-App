import "./App.css"

function GoalCard(props){

    return(
             <article>
                <header>
                    <h3>{props.name}</h3>
                </header>
                <div>
                    <p>{props.description}</p>
                </div>
                <footer>

                </footer>

             </article>
        )

}

export default GoalCard