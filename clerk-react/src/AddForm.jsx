import Nav from "./Nav"
import GoalForm from "./GoalForm.jsx"
import ExerciseForm from "./ExerciseForm.jsx"
import WorkoutForm from "./WorkoutForm.jsx"
import MilestoneForm from "./MilestoneForm.jsx"


function AddPage(props){
    if(props.formType == "goal"){
        return(
            <>
            <Nav />
            <GoalForm user={props.user} />
            </>
        )
    }else if(props.formType == "exercise"){
        return(
            <>
            <Nav />
            <ExerciseForm user={props.user} /></>
        )
    }else if(props.formType == "workout"){
        return(
            <>
            <Nav />
            <WorkoutForm user={props.user}/>
            </>
        )
    }else if(props.formType == "milestone"){
        return(
            <>
            <Nav />
            <MilestoneForm />
            </>
        )}

}

export default AddPage