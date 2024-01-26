import React from "react"
import GoalCard from "./GoalCard.jsx"
import {Link} from "react-router-dom"
import Nav from  "./Nav.jsx"

function Dashboard(props) {

    React.useEffect(() => {
        getGoals()
    }, [])

    const [goals, setGoals] = React.useState([])

    function getGoals() {
        fetch('/api/goals')
        .then(r=>r.json())
        .then(data=>setGoals(data))
    }

    const userGoals = goals.filter((g)=>g.user.id === props.user.id)
    
    const goal_cards = userGoals.map((goal)=>{
        console.log(goal)
        return (
            <GoalCard key={goal.id} get={getGoals} goal={goal} id={goal.id} name={goal.name} description={goal.description} ready={goal.ready} progress={goal.progress}/>
        )
    })

    return (
        <main className="container">
          <Nav />
        <div>
          <h1>Goals</h1>
            <section className="container">
                {goal_cards}
            </section>
        </div>
        </main>
    )
}

export default Dashboard