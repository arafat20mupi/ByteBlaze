import { Outlet } from "react-router-dom";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

const MainPage = () => {
    return (
        <div>
            <div><Navbar /></div>
            <div> <Outlet></Outlet> </div>
            <div><Footer /></div>
        </div>
    );
};

export default MainPage;