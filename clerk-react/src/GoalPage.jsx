import React from "react"
import {useLocation} from 'react-router-dom'
import Nav from './Nav'
import MilestoneRibbon from "./MilestoneRibbon"
import MilestoneForm from "./MilestoneForm"

function GoalPage(){
    const [milestones, setMilestones] = React.useState([])
    const [progress, setProgress] = React.useState(0)
    let location = useLocation()
    React.useEffect(()=>{
        getMilestones()
    }, [])

    function getMilestones(){
        setMilestones([])
        fetch ("/api/milestones")
        .then(r=>r.json())
        .then(data => {setMilestones(data)
            setProgress(data.filter((m)=>m.completed===true).length)
        }
        )

    }

    function progressUpdate(){
        let isReady = false
        let newProgress = (milestones.filter((m)=>m.completed===true).length/milestones.length)*100
        if(milestones.filter((m)=>m.completed===false).length===1 && milestones.length!==0){
            newProgress = 100
            isReady = true}
        fetch(`/api/goals/${location.state.id}`, {method: "PATCH",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({progress: newProgress,
        ready : isReady})})
        getMilestones()

    }

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
        progressUpdate()
        
    }

    

    const activeRibbons = milestones.filter((m)=>m.completed===false).map((m)=>{
        return <MilestoneRibbon key={m.id} completed={m.completed} milestone={m} id={m.id} name={m.name} description={m.description} completedHandler={completedHandler} />
    
    })

    const completedRibbons = milestones.filter((m)=>m.completed===true).map((m)=>{
        return <MilestoneRibbon key={m.id} completed={m.completed} id={m.id} name={m.name} description={m.description} />})


    
    function submitHandler(e){
        const exerciseList = []
        for (let i = 0; i < e.target['exercise-selections'].selectedOptions.length; i++){
            exerciseList.push(e.target['exercise-selections'].selectedOptions[i].value)
        }
        const postObj = {
            name: e.target.name.value,
            description: e.target.description.value,
            goal_id: location.state.id,
            exercises: exerciseList
        }
        e.preventDefault()
        fetch("/api/milestones", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        document.getElementById("milestone-form").close()
        getMilestones()
        progressUpdate()
    }

    function closeHandler(){
        document.getElementById("milestone-form").close()
    }


    return (
        <>
        <Nav />
        <h1>{location.state.name}</h1>
        <progress value={progress.toString()} max={milestones.length.toString()}></progress>
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