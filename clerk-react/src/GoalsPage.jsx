import React from "react"
import {SignOutButton} from "@clerk/clerk-react"

function GoalsPage() {
    return (
        <main className="container">
        <nav>
          <ul>
            <li><strong>Username</strong></li>
          </ul>
          <ul>
            <li><a href="#">Add Goal</a></li>
            <li><a href="#">Add Exercise</a></li>
            <li><SignOutButton afterSignOutUrl="/" /></li>
          </ul>
        </nav>
        <div>
          <h1>Goals</h1>
          <p>Random cards or something</p>
        </div>
        </main>
    )
}

export default GoalsPage