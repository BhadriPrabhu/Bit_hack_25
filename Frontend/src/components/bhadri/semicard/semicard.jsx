// import Hackathon from '../../../assets/image/index'

export function SemiCard({ title, collegeName, location, eventType }){

    return(
        <div style={{padding: "15px", display: "flex", width: "fit-content", borderRadius: "15px", boxShadow: "0px 0px 3px 0px", backgroundColor: "white", fontFamily: "poppins", height: "auto" }}>
            <div>
                <img style={{width: "50px", height: "50px", borderRadius: "10px"}}/>
            </div>
            <div style={{padding: "15px", display: "flex", flexDirection: "column", gap: "10px"}}>
                <h3 style={{margin: "0px", padding: "0px", fontSize: "22px", fontWeight: "normal"}}>{title}</h3>
                <h4 style={{margin: "0px", padding: "0px", fontWeight: "normal", width: "400px"}}>{collegeName}, {location}</h4>
                <div style={{backgroundColor: "skyblue", width: "fit-content", padding: '5px', borderRadius: "10px", paddingRight: "10px", paddingLeft: "10px"}}>
                    <h4 style={{margin: "0px", padding: "0px", fontWeight: "normal"}}>{eventType}</h4>            
                </div>
            </div>
        </div>
    );
}