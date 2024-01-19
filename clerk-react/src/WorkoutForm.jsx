import React from "react"

function WorkoutForm(){
    const [data, setData] = React.useState({name : "", description : ""})

    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.name)
    }

    function submitHandler(event){
        event.preventDefault()
        console.log(data)
        // fetch("/api/Workouts", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

    }

    return(<>
    
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <label htmlFor="WorkoutName">Workout Name:</label>
    <input type="text" value={data.name} name="name" onChange={changeHandler} required></input>
    <br></br>
    <label htmlFor="WorkoutDescription">Workout Description:</label>
    <input type="text" value={data.description} name="description" onChange={changeHandler} required></input>
    <button type="submit" >Submit Workout</button>
    </form>
    
    </>)
}

export default WorkoutForm