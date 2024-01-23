import React from "react"
import {useLocation} from 'react-router-dom'
import Nav from './Nav'
import MilestoneRibbon from "./MilestoneRibbon"
import MilestoneForm from "./MilestoneForm"

function GoalPage(){
    const [milestones, setMilestones] = React.useState([])


    React.useEffect(()=>{getMilestones()}, [])


    function getMilestones(){
        fetch ("/api/milestones")
        .then(r=>r.json())
        .then(data => setMilestones(data))}


    function completedHandler(milestone){
        const patchObj = {
            completed: true,
            completed_date: new Date(Date.now()).toLocaleDateString(),
            goal_id: milestone.goal_id,
            description : milestone.description,
            id: milestone.id,
            name: milestone.name}

        fetch(`/api/milestones/${milestone.id}`, {method: "PATCH", 
        headers: {"Content-Type" : "application/json"}, 
        body: JSON.stringify(patchObj)})
        .then(r=>r.json())
        .then(data=>console.log(data)) 
        getMilestones()
        
    }

    

    const activeRibbons = milestones.filter((m)=>m.completed===false).map((m)=>{
        return <MilestoneRibbon key={m.id} completed={m.completed} milestone={m} id={m.id} name={m.name} description={m.description} completedHandler={completedHandler} />
    
    })

    const completedRibbons = milestones.filter((m)=>m.completed===true).map((m)=>{
        return <MilestoneRibbon key={m.id} completed={m.completed} id={m.id} name={m.name} description={m.description} />})



let location = useLocation()

    
    function submitHandler(e){
        e.preventDefault()
        fetch("/api/Milestones", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        document.getElementById("milestone-form").close()
    }

    function closeHandler(){
        document.getElementById("milestone-form").close()
    }


    return (
        <>
        <Nav />
        <h1>{location.state.name}</h1>
        <progress value="55" max="100"></progress>
        <details>
            <summary>Active Milestones</summary>
            <dialog id="milestone-form">
               <MilestoneForm submitHandler={submitHandler} closeHandler={closeHandler}/>
            </dialog>
            {activeRibbons}
            <button onClick={()=>document.getElementById('milestone-form').showModal()}>Add Milestone</button>
            
            
        </details>
        <details>
            <summary>Completed Milestones</summary>    
            {completedRibbons} 
        </details>
        </>
    )
}

export default GoalPage