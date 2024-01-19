import Nav from "./Nav"


function AddPage(props){
    if(props.formType == "goal"){
        return(
            <>
            <Nav />
            <h1>GoalForm Goes Here</h1>
            </>
        )
    }else if(props.formType == "exercise"){
        return(
            <>
            <Nav />
            <h1>ExerciseForm goes here</h1></>
        )
    }else if(props.formType == "workout"){
        return(
            <>
            <Nav />
            <h1>WorkoutForm goes here</h1>
            </>
        )
    }

}

export default AddPage