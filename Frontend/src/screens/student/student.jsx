// Student Register Button


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import bgImage from "./assets/bg.png";
import logo from "../../assets/image/logo.png";
import "../host/host.css";

export function Student() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        institutionName: "",
        year: "",
        aadhaarNumber: ""
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAadhaarChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.slice(0, 16).replace(/(\d{4})/g, "$1 ").trim();
        setFormData({ ...formData, aadhaarNumber: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.aadhaarNumber.replace(/\s/g, "").length !== 16) {
            alert("Aadhaar Number Must Be Exactly 16 Digits!");
            return;
        }
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            navigate("/home");
        }, 3000);
    };

    return (
        <div className="registration-container" style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh", 
            // width: "100vw", 
            // backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div className="registration-card" style={{
                display: "flex", 
                width: "1800px", 
                backgroundColor: "white", 
                borderRadius: "10px", 
                boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
                overflow: "hidden"
            }}>
                <div className="left-panel" style={{
                    width: "50%", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    padding: "30px", 
                    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #e0c3fc 100%)"
                }}>
                    <img src={logo} alt="Logo" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "20px" }} />
                    <h2 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Join the Event!</h2>
                </div>
                <div className="right-panel" style={{
                    width: "50%", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    padding: "30px", 
                    textAlign: "center",
                    backgroundColor: "#f4f4f4"
                }}>
                    <h3 style={{ 
                        fontFamily: "Nunito", 
                        fontWeight: "bold", 
                        fontSize: "1.8rem", 
                        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #e0c3fc 100%)", 
                        WebkitBackgroundClip: "text", 
                        color: "transparent"
                    }}>Register Now</h3>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        {["name", "institutionName", "year"].map((field, index) => (
                            <input key={index} type={field === "year" ? "number" : "text"} name={field} placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} value={formData[field]} onChange={handleChange} required style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }} />
                        ))}
                        <input type="text" name="aadhaarNumber" placeholder="Aadhaar Number" value={formData.aadhaarNumber} onChange={handleAadhaarChange} maxLength="19" required style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }} />
                        <button type="submit" style={{
                            padding: "12px", 
                            borderRadius: "5px", 
                            backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #e0c3fc 100%)", 
                            color: "white", 
                            fontWeight: "bold", 
                            cursor: "pointer",
                            fontSize: "1rem",
                            transition: "0.3s"
                        }}
                        onMouseOver={(e) => e.target.style.opacity = "0.8"}
                        onMouseOut={(e) => e.target.style.opacity = "1"}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Registration Successful!</h2>
                        <p>Redirecting to Home...</p>
                    </div>
                </div>
            )}
        </div>
    );
}