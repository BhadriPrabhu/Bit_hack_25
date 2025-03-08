import homeImage from '../../../assets/image/homeImage.png'

export function HomePage(){
    return(
        <div style={{fontFamily: "poppins"}}>
            <div style={{padding: "40px", display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "row", display: "flex", flexDirection: "row", gap: "100px"}}>
                    <div>
                        <h1 style={{fontSize: "36px"}}>Unlock Your Talent</h1>
                    </div>
                    <div style={{backgroundImage: `url(${homeImage})`, backgroundSize: "cover", width: "700px", height: "350px"}}>

                    </div>
                </div>
                

            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <div>Fest Events</div>
                    <div>Technical Hackathon Online</div>
                    <div>Technical Hackathon Offline</div>
                    <div>Non Technical Events Online</div>
                    <div>Non Technical Events Offline</div>
                </div>
            </div>
        </div>
    );
}