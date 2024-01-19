import React from "react"

function ExerciseForm(){
    const [data, setData] = React.useState({name : "", description : ""})

    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.name)
    }

    function submitHandler(event){
        event.preventDefault()
        console.log(data)
        // fetch("/api/Exercises", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

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