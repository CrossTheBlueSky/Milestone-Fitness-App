import Nav from "./Nav.jsx"
import WorkoutCard from "./WorkoutCard.jsx"
import React from "react"

function WorkoutPage(){

    const [workouts, setWorkouts] = React.useState([])
    React.useEffect(()=>{
        getWorkouts()
    },[])

    function getWorkouts(){
    fetch("/api/workouts")
    .then(r=>r.json())
    .then(data => setWorkouts(data))
    }

    const allWorkouts = workouts.map((w)=>{
        return <WorkoutCard key={w.id} id={w.id} name={w.name} description={w.description} />})

    return (
        <>
        <Nav />
        <h1>Workouts</h1>
        {allWorkouts}
        </>
    )
}

export default WorkoutPage