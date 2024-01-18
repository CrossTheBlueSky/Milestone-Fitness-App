import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import AddForm from "./AddForm";

function Home(){

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-goal" element={<AddForm formType="goal" />} />
                <Route path="/add-exercise" element={<AddForm formType="exercise" />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Home