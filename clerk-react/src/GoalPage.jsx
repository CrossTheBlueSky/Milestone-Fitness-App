import React from "react"
import {useLocation} from 'react-router-dom'
import Nav from './Nav'
import MilestoneRibbon from "./MilestoneRibbon"

function GoalPage(){
    const [milestones, setMilestones] = React.useState([])

    React.useEffect(()=>{getMilestones}, [])

        console.log(milestones)

    function getMilestones(){
        fetch ("/api/milestones")
        .then(r=>r.json())
        .then(data => setMilestones(data))}
    
    // const allMilestones = milestones.map((m)=>{
    //     return <MilestoneRibbon key={m.id} name={m.name} exercises={m.exercises} />})


let location = useLocation()
console.log(location.state)

    
    function submitHandler(e){
        e.preventDefault()
        document.getElementById("milestone-form").close()
    }


    return (
        <>
        <Nav />
        <h1>{location.state.name}</h1>
        <progress value="55" max="100"></progress>
        <details>
            <summary>Milestones</summary>
            <dialog id="milestone-form">
                <form onSubmit={submitHandler}>
                    <label htmlFor="milestone-name">Milestone Name</label>
                    <input type="text" id="milestone-name" />
                    <label htmlFor="milestone-description">Milestone Description</label>
                    <input type="text" id="milestone-description" />
                    <button autoFocus type="submit">Submit</button>
                    <button onClick={()=>document.getElementById('milestone-form').close()}>Cancel</button>

                </form>
            </dialog>
            <button onClick={()=>document.getElementById('milestone-form').showModal()}>Add Milestone</button>
            {/* {allMilestones} */}
            
            
        </details>
        </>
    )
}

export default GoalPage