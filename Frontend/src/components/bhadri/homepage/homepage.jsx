import homeImage from '../../../assets/image/homeImage.png';
import { useNavigate } from 'react-router-dom';
import ImageFooter from '../../../assets/image/homefooter.png';

export function HomePage() {
    const navigate = useNavigate();
    return (
        <div style={{ fontFamily: "poppins", backgroundColor: "white" }}>
            <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
                    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <h1 style={{ fontSize: "36px" }}>Unlock Your Talent</h1>
                        <div style={{ display: "flex", justifyContent: "center", paddingRight: "40px", paddingLeft: "40px" }}>
                            <button style={{ padding: "10px", backgroundColor: "skyblue", borderRadius: "15px", border: "solid 1px black", fontWeight: "bold" }} onClick={() => navigate("/host")}>Host an Event</button>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", paddingRight: "40px", paddingLeft: "40px" }}>
                            <button style={{ padding: "10px", backgroundColor: "skyblue", borderRadius: "15px", border: "solid 1px black", fontWeight: "bold" }} onClick={() => navigate("/competition")}>Get Started</button>
                        </div>

                    </div>
                    <div style={{ backgroundImage: `url(${homeImage})`, backgroundSize: "cover", width: "700px", height: "350px" }}>

                    </div>
                </div>


            </div>

            {/* <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <button style={{ borderRadius: "15px", border: "solid 1px black", padding: "10px", backgroundColor: "azure" }}>Fest Events</button>
                    <button style={{ borderRadius: "15px", border: "solid 1px black", padding: "10px", backgroundColor: "azure" }}>Technical Hackathon Online</button>
                    <button style={{ borderRadius: "15px", border: "solid 1px black", padding: "10px", backgroundColor: "azure" }}>Technical Hackathon Offline</button>
                    <button style={{ borderRadius: "15px", border: "solid 1px black", padding: "10px", backgroundColor: "azure" }}>Non Technical Events Online</button>
                    <button style={{ borderRadius: "15px", border: "solid 1px black", padding: "10px", backgroundColor: "azure" }}>Non Technical Events Offline</button>
                </div>
            </div> */}
            <div style={{backgroundImage: `url(${ImageFooter})`, backgroundSize: "cover", width: "100%", height: "100%"}}></div>
            <img src={ImageFooter} style={{width: "100%", height: "100%"}}/>
        </div>
    );
}