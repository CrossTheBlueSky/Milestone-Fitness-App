import React from "react"

function MilestoneForm(props){
    const [data, setData] = React.useState({name : "", description : ""})
    const [exercises, setExercises] = React.useState([])
    let exerciseCount = 1;
    React.useEffect(()=>{
        fetch("/api/exercises")
        .then(response => response.json())
        .then(ex => setExercises(ex))
    },[])

    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.name)
    }



    const allOptions =  exercises.map(exercise=>{
                    return(
                        `<option key=${exercise.id} value=${exercise.id}>${exercise.name}</option>`
                    )
                })
        


    function addExercise(){

        const newExercise = document.createElement("select")
        newExercise.name = `exercise-${exerciseCount}`
        newExercise.id = `exercise-${exerciseCount}`
        newExercise.onChange = changeHandler
        newExercise.innerHTML = allOptions
        document.getElementById("exercise-list").appendChild(newExercise)

        exerciseCount++

    }

    function removeExercise(){
        document.getElementById("exercise-list").lastChild.remove()
        exerciseCount--

    }



    return(<>
    
    <form onSubmit={(e)=>{props.submitHandler(e)}}>
    <button type="button" onClick={props.closeHandler}>Cancel</button>
    <label htmlFor="MilestoneName">Milestone Name:</label>
    <input type="text" value={data.name} name="name" onChange={changeHandler} required></input>
    <br></br>
    <label htmlFor="MilestoneDescription">Milestone Description:</label>
    <input type="text" value={data.description} name="description" onChange={changeHandler} required></input>
    <label htmlFor="RelatedExercises">Related Exercises:</label>
    <div id="exercise-list">
    </div>
    <button type="button" onClick={addExercise}>Add Exercise</button>
    <button type="button" onClick={removeExercise}>Remove Exercise</button>
    <button type="submit" >Submit Milestone</button>
    </form>
    
    </>)
}

export default MilestoneForm