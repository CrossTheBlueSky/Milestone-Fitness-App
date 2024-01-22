import React from "react"
import {useNavigate} from "react-router-dom"

function WorkoutForm(props){
    const [data, setData] = React.useState({name : "", description : ""})
    const navigate = useNavigate()

    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.name)
    }

    function submitHandler(event){
        event.preventDefault()
        const postObj = {
            name: data.name,
            description: data.description,
            user_id: props.user.id
        }
        fetch("/api/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        navigate("/workouts")

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