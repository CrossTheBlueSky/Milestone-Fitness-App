import React from "react"
import {useNavigate} from "react-router-dom"

function GoalForm(props){
    const navigate = useNavigate()
    const [goalData, setGoalData] = React.useState({name : "", description : "", user_id : props.user.id})

    function changeHandler(event){
        setGoalData({...goalData, [event.target.name]: event.target.value})
    }

    function submitHandler(event){
        event.preventDefault()

        const postObj = {
            name : goalData.name,
            description : goalData.description,
            user_id : props.user.id
        }
        
        fetch("/api/goals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        navigate("/")


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