import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupOrg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer"); // Default role
    const [company, setCompany] = useState("");
    const [revenue, setRevenue] = useState("");
    const [organiserProof, setOrganiserProof] = useState(null);

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);
        formData.append("company", company);
        formData.append("revenue", revenue);
        if (organiserProof) {
            formData.append("organiserProof", organiserProof);
        }

        try {
            const response = await axios.post("http://localhost:3333/api/auth/signup", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            if (response.data) {
                console.log("Signup successful!", response.data);
            } else {
                console.error("Signup failed");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "200px", flexDirection: "column", gap: "20px", border: 'solid 1px black', marginLeft: "550px", marginRight: "550px", padding: "30px", borderRadius: "10px", backgroundColor: "lightgreen"}}>
            <h2 style={{fontFamily: "nunito", fontWeight: "bold"}}>Organiser's Signup Page</h2>
            <form onSubmit={handleSignup} style={{display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center"}}>
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                    required
                    style={{width: "300px", padding: "5px", border: "solid 1px black", borderRadius: "10px", fontFamily: "poppins"}}
                />
                <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email"
                    required
                    style={{width: "300px", padding: "5px", border: "solid 1px black", borderRadius: "10px", fontFamily: "poppins"}}
                />
                <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password"
                    required
                    style={{width: "300px", padding: "5px", border: "solid 1px black", borderRadius: "10px", fontFamily: "poppins"}}
                />
                <input
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    placeholder="Enter Organiser Company"
                    required
                    style={{width: "300px", padding: "5px", border: "solid 1px black", borderRadius: "10px", fontFamily: "poppins"}}
                />
                <input
                    name="revenue"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    type="text"
                    placeholder="Enter Company's Revenue"
                    required
                    style={{width: "300px", padding: "5px", border: "solid 1px black", borderRadius: "10px", fontFamily: "poppins"}}
                />
                {/* <input
                    type="file"
                    name="organiserProof"
                    onChange={(e) => setOrganiserProof(e.target.files[0])}
                    required
                    style={{width: "300px", padding: "5px", border: "solid 1px black", borderRadius: "10px", fontFamily: "poppins"}}
                /> */}
                {/* <label style={{fontFamily: "poppins"}}>Upload Organiser's Proof</label> */}
                <button type="submit" onClick={() => navigate("/home")} style={{width: "100px", display: 'flex', justifyContent: "center", fontFamily: "poppins", fontSize: "18px", border: "solid 1px black", borderRadius: "10px"}}>Signup</button>
            </form>
        </div>
    );
}