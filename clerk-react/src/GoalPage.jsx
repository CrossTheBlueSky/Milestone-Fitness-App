import {useLocation} from 'react-router-dom'
import Nav from './Nav'

function GoalPage(){

let location = useLocation()
console.log(location.state)
    return (
        <>
        <Nav />
        <h1>{location.state.name}</h1>
        <progress value="55" max="100"></progress>
        <details>
            <summary>Milestones</summary>
            <p>…</p>
        </details>
        </>
    )
}

export default GoalPage