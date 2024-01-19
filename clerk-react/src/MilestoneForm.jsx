import React from "react"

function MilestoneForm(){
    const [data, setData] = React.useState({name : "", description : ""})

    function changeHandler(event){
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.name)
    }

    function submitHandler(event){
        event.preventDefault()
        console.log(data)
        // fetch("/api/Milestones", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

    }

    return(<>
    
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <label htmlFor="MilestoneName">Milestone Name:</label>
    <input type="text" value={data.name} name="name" onChange={changeHandler} required></input>
    <br></br>
    <label htmlFor="MilestoneDescription">Milestone Description:</label>
    <input type="text" value={data.description} name="description" onChange={changeHandler} required></input>
    <button type="submit" >Submit Milestone</button>
    </form>
    
    </>)
}

export default MilestoneForm