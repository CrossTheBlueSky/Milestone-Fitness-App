import {SignOutButton} from "@clerk/clerk-react"
import {useLocation} from "react-router-dom"
import {useUser} from "@clerk/clerk-react"

function Nav(props){
  const location = useLocation()
  const user = useUser()

    return (
        <nav>
        <ul>
          <li><strong><a href="/user-profile">{user.user.username}</a></strong></li>
        </ul>
        <ul>
          {location.pathname !== '/' ? <li><a href="/">View Goals</a></li> : <li><a href="/add-goal">Add Goal</a></li>}
          {location.pathname !== '/exercises' ? <li><a href="/exercises">View Exercises</a></li> : <li><a href="/add-exercise">Add Exercise</a></li>}
          {location.pathname !== '/workouts' ? <li><a href="/workouts">View Workouts</a></li> : <li><a href="/add-workout">Add Workout</a></li>}
          <li><SignOutButton aftersignouturl="/" /></li>
        </ul>
      </nav>
    )
}

export default Nav