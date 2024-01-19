import React from "react"

function GoalForm(){
    const [goalData, setGoalData] = React.useState({name : "", description : ""})

    function changeHandler(event){
        setGoalData({...goalData, [event.target.name]: event.target.value})
        console.log(event.target.name)
    }

    function submitHandler(event){
        event.preventDefault()
        console.log(goalData)
        // fetch("/api/goals", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(goalData)
        // })

    }

    return(<>
    
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <label htmlFor="goalName">Goal Name:</label>
    <input type="text" value={goalData.name} name="name" onChange={changeHandler} required></input>
    <br></br>
    <label htmlFor="goalDescription">Goal Description:</label>
    <input type="text" value={goalData.description} name="description" onChange={changeHandler} required></input>
    <button type="submit" >Submit Goal</button>
    </form>
    
    </>)
}

export default GoalForm