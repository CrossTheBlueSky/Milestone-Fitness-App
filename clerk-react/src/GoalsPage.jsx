import React from "react"
import {SignOutButton} from "@clerk/clerk-react"
import GoalCard from "./GoalCard.jsx"

function GoalsPage() {

    React.useEffect(() => {
        getGoals()
    }, [])

    const [allGoals, setAllGoals] = React.useState([])

    function getGoals() {
        console.log("getGoals")
        fetch('/api/Goals')
        .then(r=>r.json())
        .then(data=>setAllGoals(data))
    }

    const goal_cards = allGoals.map((goal)=>{
        console.log(goal)
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
            <li><a href="#">Add Goal</a></li>
            <li><a href="#">Add Exercise</a></li>
            <li><SignOutButton aftersignouturl="/" /></li>
          </ul>
        </nav>
        <div>
          <h1>Goals</h1>
            <div>
                {console.log(goal_cards)}
                {goal_cards}
            </div>
        </div>
        </main>
    )
}

export default GoalsPage