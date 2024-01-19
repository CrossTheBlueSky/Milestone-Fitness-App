import React from "react"
import GoalCard from "./GoalCard.jsx"
import {Link} from "react-router-dom"
import Nav from  "./Nav.jsx"

function Dashboard() {

    React.useEffect(() => {
        getGoals()
    }, [])

    const [allGoals, setAllGoals] = React.useState([])

    function getGoals() {
        fetch('/api/Goals')
        .then(r=>r.json())
        .then(data=>setAllGoals(data))
    }

    const goal_cards = allGoals.map((goal)=>{
        return (
            <GoalCard key={goal.id} id={goal.id} name={goal.name} description={goal.description} />
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