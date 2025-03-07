import Search from "../../../assets/icon/search";


export function Navbar(){
    return(
        <div style={{ backgroundColor: "#D9D9D9", display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", paddingLeft: "30px", paddingRight: "30px", padding: "15px"}}>
                <h1 style={{padding: '0px', margin: "0px", fontFamily: "poppins"}}>Eventhon</h1>
                <div style={{padding: "10px", border: "solid 1px black", borderRadius: "25px", display: "flex", alignItems: "center", fontFamily: "poppins"}}>
                    <input placeholder="Search for Clash" style={{border: "none", color: "black", fontSize: "18px", outline: "none", backgroundColor: "#D9D9D9"}}/>
                    <Search/>
                </div>
            </div>
            <div>
                <div>
                    <h3></h3>
                </div>
            </div>
        </div>
    );
}