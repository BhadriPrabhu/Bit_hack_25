// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("customer");
//     const [errorMessage, setErrorMessage] = useState(""); // State for error messages

//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setErrorMessage(""); // Reset error message
//         const signupData = { name, email, password, role };

//         try {
//             const response = await axios.post("http://localhost:3333/api/auth/signup", signupData);

//             if (response.status === 201) {
//                 console.log("Signup successful!", response.data);
//                 navigate("/login"); // Redirect to login page after signup
//             }
//         } catch (error) {
//             if (error.response) {
//                 if (error.response.status === 409) {
//                     setErrorMessage("User already exists. Redirecting to login...");
//                     setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
//                 } else {
//                     setErrorMessage(error.response.data.message || "Signup failed");
//                 }
//             } else {
//                 setErrorMessage("Network Error. Please try again.");
//             }
//         }
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "100px", flexDirection: "column", gap: "20px", padding: "30px", borderRadius: "10px", backgroundColor: "lightgreen" }}>
//             <h3 style={{ fontFamily: "nunito", fontWeight: "bold" }}>Signup Page</h3>
//             {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Show error messages */}

//             <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", justifyContent: "center" }}>
//                 <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
//                 <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
//                 <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
                
//              <a href="/signuporg" >
//                 signup as organizer
//             </a>
                

//                 <button type="submit" style={{ width: "100px", padding: "10px", borderRadius: "10px" }}>Signup</button>
//             </form>
            
            
//             <button onClick={() => navigate("/")} style={{ marginTop: "10px", padding: "5px 10px", borderRadius: "5px", backgroundColor: "blue", color: "white", cursor: "pointer" }}>
//                 Already have an account? Login
//             </button>
//         </div>
//     );
// }

// Signup



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../../../assets/image/bgimage.jpg";
import logo from "../../../assets/image/logo.png";

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage("");
        const signupData = { name, email, password, role };

        try {
            const response = await axios.post("http://localhost:3334/api/auth/signup", signupData);
            if (response.status === 201) {
                setMessage("Signup successful! Redirecting to login...");
                setTimeout(() => navigate("/home"), 2000);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) {
                    setMessage("User already exists. Redirecting to login...");
                    setTimeout(() => navigate("/"), 2000);
                } else {
                    setMessage(error.response.data.message || "Signup failed");
                }
            } else {
                setMessage("Network Error. Please try again.");
            }
        }
    };

    return (
        <div style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh", 
            width: "100vw", 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "100% 100%", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div style={{
                display: "flex", 
                width: "800px", 
                backgroundColor: "white", 
                borderRadius: "10px", 
                boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
                overflow: "hidden"
            }}>
                <div style={{
                    width: "50%", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    padding: "30px", 
                    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #e0c3fc 100%)"
                }}>
                    <img src={logo} alt="Logo" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "20px" }} />
                    <h2 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Join Us!</h2>
                </div>
                <div style={{
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
                    }}>Sign Up</h3>
                    {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
                    <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
                        />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ padding: "12px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }}
                        />
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
                        onMouseOut={(e) => e.target.style.opacity = "1"}
                        onClick={() => navigate("/home")}
                        >
                            Sign Up
                        </button>
                    </form>
                    <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
                        Already have an account? <span style={{ color: "#007BFF", cursor: "pointer", fontWeight: "bold" }} onClick={() => navigate("/")}>
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}