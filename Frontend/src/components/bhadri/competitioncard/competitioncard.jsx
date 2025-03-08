import Location from "../../../assets/icon/location";
import Team from "../../../assets/icon/team";
import Trophy from "../../../assets/icon/trophy";
import { useNavigate } from "react-router-dom";

export function CompetitionCard({
    title,
    collegeName,
    eventName,
    location,
    teamSize,
    website,
    prize,
    imageSrc
}) {
    const navigate = useNavigate();

    return (
        <div style={{ fontFamily: "poppins", padding: "20px", boxShadow: "0px 0px 3px 0px", borderRadius: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <div>
                        <img 
                            src={imageSrc || "https://via.placeholder.com/100"} 
                            alt="Event" 
                            style={{ width: "100px", height: "100px", borderRadius: "15px" }} 
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "10px", gap: "10px" }}>
                        <h2 style={{ fontSize: "28px", margin: "0px", padding: "0px" }}>{title}</h2>
                        <h4 style={{ fontWeight: "normal", margin: "0px", padding: "0px" }}>{collegeName}</h4>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <Trophy />
                        <h4 style={{ fontWeight: "normal", margin: "0px", padding: "0px" }}>{eventName}</h4>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <Location />
                        <h4 style={{ fontWeight: "normal", margin: "0px", padding: "0px" }}>{location}</h4>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px", backgroundColor: "aqua", width: "fit-content", padding: "5px", borderRadius: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                    <Team />
                    <div>
                        <h4 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>Team Size</h4>
                        <h5 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>{teamSize}</h5>
                    </div>
                </div>
                <div>
                    <h3 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>Website :</h3>
                    <div style={{ marginLeft: "15px" }}>
                        <a style={{ fontSize: "16px" }} href={website} target="_blank" rel="noopener noreferrer">
                            {website}
                        </a>
                    </div>
                </div>
                <div>
                    <h3 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>Prize :</h3>
                    <h4 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>{prize}</h4>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button 
                        onClick={() => navigate("/register")} 
                        style={{ backgroundColor: "skyblue", border: "solid 1px black", padding: "6px 15px", borderRadius: "15px", fontWeight: "bold", fontSize: "18px" }}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
