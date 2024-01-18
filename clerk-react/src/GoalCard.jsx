

function GoalCard(props){

    return(
             <article>
                <header>
                    <h1>{props.name}</h1>
                </header>
                <body>
                    <h3>{props.description}</h3>
                </body>
                <footer>

                </footer>

             </article>
        )

}

export default GoalCard