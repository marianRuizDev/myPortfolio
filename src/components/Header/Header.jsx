import header from "./header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <div className="wraper">
        <div className="headerwrap"> 
            <div className="logo">
                <h1 className="logo">Mariangel Ruiz</h1>
            </div>
            <Navbar />
        </div>

        </div>
    )
}

export default Header;