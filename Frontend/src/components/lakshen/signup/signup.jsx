import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer");
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset error message
        const signupData = { name, email, password, role };

        try {
            const response = await axios.post("http://localhost:3333/api/auth/signup", signupData);

            if (response.status === 201) {
                console.log("Signup successful!", response.data);
                navigate("/login"); // Redirect to login page after signup
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) {
                    setErrorMessage("User already exists. Redirecting to login...");
                    setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
                } else {
                    setErrorMessage(error.response.data.message || "Signup failed");
                }
            } else {
                setErrorMessage("Network Error. Please try again.");
            }
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "100px", flexDirection: "column", gap: "20px", padding: "30px", borderRadius: "10px", backgroundColor: "lightgreen" }}>
            <h3 style={{ fontFamily: "nunito", fontWeight: "bold" }}>Signup Page</h3>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Show error messages */}

            <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
                <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
                
             <a href="/signuporg" >
                signup as organizer
            </a>
                

                <button type="submit" style={{ width: "100px", padding: "10px", borderRadius: "10px" }}>Signup</button>
            </form>
            
            
            <button onClick={() => navigate("/")} style={{ marginTop: "10px", padding: "5px 10px", borderRadius: "5px", backgroundColor: "blue", color: "white", cursor: "pointer" }}>
                Already have an account? Login
            </button>
        </div>
    );
}