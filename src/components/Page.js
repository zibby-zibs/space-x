import { Route, Routes } from "react-router-dom";
import Crew from "./Crew";
import Destination from "./Destination";
import HomePage from "./HomePage";
import Technology from "./Technology";


const Page = () => {
    return ( 
        <main className="main-page">
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </main>
     );
}
 
export default Page;