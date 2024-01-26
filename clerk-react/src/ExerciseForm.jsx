import React from "react"
import {useNavigate} from "react-router-dom"

function ExerciseForm(props){
    const [data, setData] = React.useState({name : "", description : ""})
    const navigate = useNavigate()

    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
    }

    function submitHandler(event){
        event.preventDefault()
        const postObj = {
            name : data.name,
            description : data.description,
            user_id: props.user.id
        }
        fetch("/api/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        navigate('/exercises')


    }

    return(<>
    
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <label htmlFor="ExerciseName">Exercise Name:</label>
    <input type="text" value={data.name} name="name" onChange={changeHandler} required></input>
    <br></br>
    <label htmlFor="ExerciseDescription">Exercise Description:</label>
    <input type="text" value={data.description} name="description" onChange={changeHandler} required></input>
    <button type="submit" >Submit Exercise</button>
    </form>
    
    </>)
}

export default ExerciseForm