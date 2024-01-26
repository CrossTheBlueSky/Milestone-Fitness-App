import Nav from "./Nav.jsx"
import WorkoutCard from "./WorkoutCard.jsx"
import React from "react"


function WorkoutPage(props){

   

    const [workouts, setWorkouts] = React.useState([])
  

    React.useEffect(()=>{
        getWorkouts()

    },[])


    function getWorkouts(){
    fetch("/api/workouts")
    .then(r=>r.json())
    .then(data => setWorkouts(data))
    }

    const userWorkouts = workouts.filter((w)=>w.user_id === props.user.id)
    
    function deleteHandler(id){
        console.log(id)
        fetch(`/api/workouts/${id}`,{
            method: "DELETE"
        })
        .then(r=>r.json())
        .then(data => {
            console.log("delete attempted")
            const updatedWorkouts = workouts.filter((w)=>w.id !== id)
            setWorkouts(updatedWorkouts)
        })
    }





    const allWorkouts = userWorkouts.map((w)=>{

        return <WorkoutCard deleteHandler={deleteHandler} key={w.id} id={w.id} exercises={w.exercises} workout={w}/>})

    return (
        <>
        <Nav />
        <h1>Workouts</h1>
        {allWorkouts}
        </>
    )
}

export default WorkoutPage