import navbar from "./navbar.css";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
    return (
        <div className="navbar">
            <div className="iconMenu"><IoMdMenu size={30}/></div>
        </div>
    )
}

export default Navbar;