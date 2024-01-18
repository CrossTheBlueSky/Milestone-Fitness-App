import { BrowserRouter, Route, Routes} from "react-router-dom";
import GoalsPage from "./GoalsPage";

function Home(){

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GoalsPage />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Home