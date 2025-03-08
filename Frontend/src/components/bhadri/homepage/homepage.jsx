import homeImage from '../../../assets/image/homeImage.png'
import { useNavigate } from 'react-router-dom';

export function HomePage(){
    const navigate = useNavigate();
    return(
        <div style={{fontFamily: "poppins", backgroundColor: "white"}}>
            <div style={{padding: "40px", display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "row", gap: "100px"}}>
                    <div>
                        <h1 style={{fontSize: "36px"}}>Unlock Your Talent</h1>
                    </div>
                    <div style={{backgroundImage: `url(${homeImage})`, backgroundSize: "cover", width: "700px", height: "350px"}}>

                    </div>
                </div>
                

            </div>
            <div>
                <button onClick={() => navigate("/host")}>Host an Event</button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <button style={{borderRadius: "15px", border: "solid 1px black", padding: "10px"}}>Fest Events</button>
                    <button>Technical Hackathon Online</button>
                    <button>Technical Hackathon Offline</button>
                    <div>Non Technical Events Online</div>
                    <div>Non Technical Events Offline</div>
                </div>
            </div>
        </div>
    );
}