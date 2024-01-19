import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import AddForm from "./AddForm";
import GoalPage from "./GoalPage";
import ExercisePage from "./ExercisePage";
import WorkoutPage from "./WorkoutPage.jsx";
import {useUser} from "@clerk/clerk-react"
import React from "react";

function Home(){

const currentUser = useUser()
React.useEffect(()=>{
    fetch("/api/users")
    .then(r=>r.json())
    .then(data => userCheck(data))})

    function userCheck(users){
        const userCheck = users.filter((u)=>u.email===currentUser.user.emailAddresses[0].emailAddress)
        if(userCheck.length===0){
            console.log("user not found, adding user")
            fetch("/api/users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:currentUser.user.emailAddresses[0].emailAddress,
                    username:currentUser.user.username,
                })
            })
        }

    }

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-goal" element={<AddForm formType="goal" />} />
                <Route path="/exercises" element={<ExercisePage/>} />
                <Route path="/add-exercise" element={<AddForm formType="exercise" />} />
                <Route path="/workouts" element={<WorkoutPage />} />
                <Route path="/add-workout" element={<AddForm formType="workout" />} />
                <Route path="/goal/:id" element={<GoalPage />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Home