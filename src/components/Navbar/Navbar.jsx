import navbar from "./navbar.css";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
    return (
        <div className="menu">
            <div className="iconMenu"><IoMdMenu size={30} color={"white"}/></div>
        </div>
    )
}

export default Navbar;