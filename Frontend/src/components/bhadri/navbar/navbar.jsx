import { Link } from "react-router-dom";
import Search from "../../../assets/icon/search";
import Triangle from "../../../assets/icon/triangle";
import Logo from '../../../assets/image/logo.png'

export function Navbar() {
    return (
        <div style={{ backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #e0c3fc 100%)", display: "flex", flexDirection: "column", position: "sticky", top: "0px", zIndex: "1" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", paddingLeft: "30px", paddingRight: "30px", padding: "15px" }}>
                <div style={{display: "flex", gap: "10px"}}>
                    <img src={Logo} style={{width: "50px", height: "50px", borderRadius: '50%'}}/>
                    <h1 style={{ padding: '0px', margin: "0px", fontFamily: "poppins" }}>Eventhon</h1>
                    
                </div>
                <div style={{ padding: "10px", border: "solid 1px black", borderRadius: "25px", display: "flex", alignItems: "center", fontFamily: "poppins" }}>
                    <input placeholder="Search for Clash" style={{ border: "none", color: "black", fontSize: "18px", outline: "none", backgroundColor: "transparent" }} />
                    <Search />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Triangle rotate="scaleX(-1)" />
                <div style={{ display: "flex", flexDirection: "row", backgroundColor: "white", padding: "20px", paddingRight: "150px", paddingLeft: "150px", gap: "80px", fontFamily: "poppins" }}>
                    <Link to="/home" style={{ textDecoration: "none", color: "black" }}><h3 style={{ margin: "0px", padding: "0px" }}>Home</h3></Link>
                    <Link to="/blog" style={{ textDecoration: "none", color: "black" }}><h3 style={{ margin: "0px", padding: "0px" }}>Blog</h3></Link>
                    <Link to="/scholarship" style={{ textDecoration: "none", color: "black" }}><h3 style={{ margin: "0px", padding: "0px" }}>Scholarship</h3></Link>
                    <Link to="/competition" style={{ textDecoration: "none", color: "black" }}><h3 style={{ margin: "0px", padding: "0px" }}>Competition</h3></Link>
                    {/* <Link to="/competition">
                    <select style={{border: "none", backgroundColor: "white", width: "160px", fontSize: "20px", outline: "none", fontWeight: "bold", fontFamily: "poppins"}}>
                        <option>Competition</option>
                        <option>Fest Events</option>
                        <option>Tech Hackathon Online</option>
                        <option>Tech Hackathon Offline</option>
                        <option>Non Tech Hackathon Online</option>
                        <option>Non Tech Hackathon Offline</option>
                    </select></Link> */}
                    <Link to="/about" style={{ textDecoration: "none", color: "black" }}><h3 style={{ margin: "0px", padding: "0px" }}>About us</h3></Link>
                </div>
                <Triangle rotate="scaleX(1)" />
            </div>
        </div>
    );
}
