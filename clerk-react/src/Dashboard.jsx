import React from "react"
import {SignOutButton} from "@clerk/clerk-react"
import GoalCard from "./GoalCard.jsx"
import {Link} from "react-router-dom"
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
            <GoalCard key={goal.id} name={goal.name} description={goal.description} />
        )
    })

    return (
        <main className="container">
        <nav>
          <ul>
            <li><strong>Username</strong></li>
          </ul>
          <ul>
            <li><a href="/add-goal">Add Goal</a></li>
            <li><a href="/add-exercise">Add Exercise</a></li>
            <li><SignOutButton aftersignouturl="/" /></li>
          </ul>
        </nav>
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