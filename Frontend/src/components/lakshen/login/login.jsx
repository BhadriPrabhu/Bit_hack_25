import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginData = { email, password };

        try {
            const response = await axios.post("http://localhost:3333/api/auth/login", loginData);
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                setMessage("Login successful! Redirecting...");
                setTimeout(() => navigate("/dashboard"), 2000);
            } else {
                setMessage("Invalid email or password.");
            }
        } catch (error) {
            console.error("Login error: ", error);
            setMessage("Login failed. Please check your credentials.");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "100px", flexDirection: "column", gap: "20px", padding: "30px", borderRadius: "10px", backgroundColor: "lightcoral" }}>
            <h3 style={{ fontFamily: "Nunito", fontWeight: "bold" }}>Login</h3>
            {message && <p style={{ color: "white", fontWeight: "bold" }}>{message}</p>}
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", justifyContent: "center" }}>
                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
                <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" required style={{ width: "300px", padding: "5px", borderRadius: "10px" }} />
                <button type="submit" style={{ width: "100px", padding: "10px", borderRadius: "10px" }}>Login</button>
            </form>
            
            {/* Go to Signup button */}
            <button onClick={() => navigate("/signup")} style={{ marginTop: "10px", padding: "5px 10px", borderRadius: "5px", backgroundColor: "blue", color: "white", cursor: "pointer" }}>
                Don't have an account? Signup
            </button>
        </div>
    );
}