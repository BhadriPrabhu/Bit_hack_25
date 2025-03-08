import React, { useState } from "react";
import "./host.css";
import { useNavigate } from "react-router-dom";

export default function HostPage() {
    const [formData, setFormData] = useState({
        eventName: "",
        eventOrganizer: "",
        webLink: "",
        eventCategory: "",
        status: "",
        registrationStartDate: "",
        registrationEndDate: "",
        durationDays: "",
        eventLocation: "",
        eventLevel: "",
        state: "",
        country: "",
        competitionName: "",
        winnerPrize: "",
        createdDate: "",
        eventClassification: "",
        logo: null
    });

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, logo: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const apiUrl = "https://event-managent-backend-u1bm.onrender.com/api/events";

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await fetch(apiUrl, {
                method: "POST",
                body: formDataToSend
            });

            const result = await response.json();

            if (response.ok) {
                setMessage("Registration Successful!");
                setFormData({
                    eventName: "",
                    eventOrganizer: "",
                    webLink: "",
                    eventCategory: "",
                    status: "",
                    registrationStartDate: "",
                    registrationEndDate: "",
                    durationDays: "",
                    eventLocation: "",
                    eventLevel: "",
                    state: "",
                    country: "",
                    competitionName: "",
                    winnerPrize: "",
                    createdDate: "",
                    eventClassification: "",
                    logo: null
                });
            } else {
                setMessage(result.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setMessage("Failed to register. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-card" 
                style={{ backgroundImage: "linear-gradient(62deg, #162447 0%, #4fa3ff 100%)" }}
            >
                <h2 style={{ color: "white" }}>Event Registration</h2>
                <div className="form-scroll">
                    <form onSubmit={handleSubmit} className="form-grid">
                        {/* Event Category */}
                        <div className="form-group">
                            <label style={{ color: "white" }}>Event Category:</label>
                            <select name="eventCategory" value={formData.eventCategory} onChange={handleChange} required>
                                <option value="" disabled>Event Category</option>
                                <option value="Paper Presentation">Paper Presentation</option>
                                <option value="Competition">Competition</option>
                                <option value="Innovathon">Innovathon</option>
                            </select>
                        </div>

                        {/* Event Classification */}
                        <div className="form-group">
                            <label style={{ color: "white" }}>Event Classification:</label>
                            <select name="eventClassification" value={formData.eventClassification} onChange={handleChange} required>
                                <option value="" disabled>Event Classification</option>
                                <option value="Fest Events">Fest Events</option>
                                <option value="Technical Hackathon Online">Technical Hackathon Online</option>
                                <option value="Technical Hackathon Offline">Technical Hackathon Offline</option>
                                <option value="Non Technical Events Online">Non Technical Events Online</option>
                                <option value="Non Technical Events Offline">Non Technical Events Offline</option>
                            </select>
                        </div>

                        {/* Dynamic Input Fields */}
                        {[
                            "eventName",
                            "eventOrganizer",
                            "webLink",
                            "status",
                            "eventLocation",
                            "eventLevel",
                            "state",
                            "country",
                            "competitionName",
                            "winnerPrize"
                        ].map((field, index) => (
                            <div className="form-group" key={index}>
                                <label style={{ color: "white" }}>
                                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                                </label>
                                <input type="text" name={field} value={formData[field]} onChange={handleChange} required />
                            </div>
                        ))}

                        {/* Numeric Fields */}
                        <div className="form-group">
                            <label style={{ color: "white" }}>Duration (Days):</label>
                            <input type="number" name="durationDays" value={formData.durationDays} onChange={handleChange} required />
                        </div>

                        {/* Date Fields */}
                        <div className="form-group">
                            <label style={{ color: "white" }}>Registration Start Date:</label>
                            <input type="date" name="registrationStartDate" value={formData.registrationStartDate} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label style={{ color: "white" }}>Registration End Date:</label>
                            <input type="date" name="registrationEndDate" value={formData.registrationEndDate} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label style={{ color: "white" }}>Created Date:</label>
                            <input type="date" name="createdDate" value={formData.createdDate} onChange={handleChange} required />
                        </div>

                        {/* File Upload */}
                        <div className="form-group full-width">
                            <label style={{ color: "white" }}>Upload Logo:</label>
                            <input type="file" name="logo" accept="image/*" onChange={handleFileChange} />
                            {formData.logo && typeof formData.logo === "object" && (
                                <div className="logo-preview">
                                    <img src={URL.createObjectURL(formData.logo)} alt="Logo Preview" />
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" onClick={() => navigate("/home")} className="submit-btn" disabled={loading}>
                            {loading ? "Registering..." : "Register"}
                        </button>

                        {/* Message */}
                        {message && <p style={{ color: "white", marginTop: "10px" }}>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
