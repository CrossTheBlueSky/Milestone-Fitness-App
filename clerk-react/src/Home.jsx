import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import AddForm from "./AddForm";
import GoalPage from "./GoalPage";
import ExercisePage from "./ExercisePage";
import WorkoutPage from "./WorkoutPage.jsx";

function Home(){

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-goal" element={<AddForm formType="goal" />} />
                <Route path="/exercises" element={<ExercisePage/>} />
                <Route path="/workouts" element={<WorkoutPage />} />
                <Route path="/goal/:id" element={<GoalPage />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Home