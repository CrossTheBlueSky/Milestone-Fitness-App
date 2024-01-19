import {useLocation} from 'react-router-dom'

function GoalPage(){

let location = useLocation()
console.log(location.state)
    return (
        <>
        <h1>Goal Page</h1>
        </>
    )
}

export default GoalPage