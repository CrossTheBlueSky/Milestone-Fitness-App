import React from "react"
import {useNavigate} from "react-router-dom"

function WorkoutForm(props){
    const [data, setData] = React.useState({name : "", description : "", date_performed : "", exercises: []})
    const [exercises, setExercises] = React.useState([])
    React.useEffect(()=>{
        fetch("/api/exercises")
        .then(response => response.json())
        .then(ex => setExercises(ex))
    },[])

    const navigate = useNavigate()
    
    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.value)
    }
    
    function submitHandler(event){
        event.preventDefault()
        console.log()
        const exerciseList = []
        for (let i = 0; i < event.target['exercise-selections'].selectedOptions.length; i++){
            exerciseList.push(event.target['exercise-selections'].selectedOptions[i].value)
        }
        const postObj = {
            name: data.name,
            description: data.description,
            user_id: props.user.id,
            date_performed: event.target["date_performed"].value,
            exercises: exerciseList
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

    const allOptions =  exercises.map(exercise=>{
        return <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
        
    })

    return(<>
    
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <label htmlFor="WorkoutName">Workout Name:</label>
    <input type="text" value={data.name} name="name" onChange={changeHandler} required></input>
    <br></br>
    <label htmlFor="WorkoutDescription">Workout Description:</label>
    <input type="text" value={data.description} name="description" onChange={changeHandler} required></input>
    <label htmlFor="DatePerformed">Date Performed</label>
    <input type="date" value={data.date_performed} name="date_performed" onChange={changeHandler} required></input>
    <label htmlFor="ExercisesPerformed">Exercises Performed:</label>
    <select name="exercise-selections[]" id="exercise-selections" onChange={changeHandler} multiple>
    <option value="">--Shift+Click to select multiple exercises--</option>
        {allOptions}
    </select>
    <button type="submit" >Submit Workout</button>
    </form>
    
    </>)
}

export default WorkoutForm