import Location from "../../../assets/icon/location";
import Team from "../../../assets/icon/team";
import Trophy from "../../../assets/icon/trophy";


export function CompetitionCard() {
    return (
        <div style={{ fontFamily: "poppins", padding: "20px", boxShadow: "0px 0px 3px 0px", borderRadius: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <div>
                        <img style={{ width: "100px", height: "100px", borderRadius: "15px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "10px", gap: "10px" }}>
                        <h2 style={{ fontSize: "28px", margin: "0px", padding: "0px" }}>Aqua Tech Innovators</h2>
                        <h4 style={{ fontWeight: "normal", margin: "0px", padding: "0px" }}>Indian Institute of technology, Guwahati</h4>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <Trophy />
                        <h4 style={{ fontWeight: "normal", margin: "0px", padding: "0px" }}> Techritik</h4>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <Location />
                        <h4 style={{ fontWeight: "normal", margin: "0px", padding: "0px" }}>Online</h4>
                    </div>

                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px", backgroundColor: "aqua", width: "fit-content", padding: "5px", borderRadius: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                    <Team />
                    <div>
                        <h4 style={{ margin: "0px", padding: "0px", fontWeight: "normal", }}>Team Size</h4>
                        <h5 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>4</h5>
                    </div>
                </div>
                <div>
                    <h3 style={{ margin: "0px", padding: "0px", fontWeight: "normal" }}>Website :</h3>
                    <div style={{marginLeft: "15px"}}>
                        <a style={{fontSize: "16px"}} href="https://kce.ac.in/national-conference-on-sustainable-materials-automotive-technologies-and-artificial-intelligence-smatai/">https://kce.ac.in/national-conference-on-sustainable-materials-automotive-technologies-and-artificial-intelligence-smatai/</a>
                    </div>
                </div>
                <div>
                    <h3 style={{margin: "0px", padding: "0px", fontWeight: "normal"}}>Prize :</h3>
                    <h4 style={{margin: "0px", padding: "0px", fontWeight: "normal"}}>I YEAR - 1200; II YEAR -1200; III YEAR -2000; IV YEAR -2000</h4>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <button style={{backgroundColor: "red", border: "solid 1px black", padding: "6px", paddingRight: "15px", paddingLeft: "15px", borderRadius: "15px", fontWeight: "bold", fontSize: "18px"}}>Register</button>
                </div>
            </div>
        </div>
    );
}