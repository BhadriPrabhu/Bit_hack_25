// BLOG PAGE


import React from "react";
import { motion } from "framer-motion";

const events = [
    { name: "Techkriti 2025", location: "IIT Kanpur, Uttar Pradesh", participants: 5000, description: "A premier technology and entrepreneurship festival with workshops, competitions, and guest lectures." },
    { name: "Technex 2025", location: "IIT BHU, Uttar Pradesh", participants: 4500, description: "Annual techno-management fest featuring hackathons, paper presentations, and coding contests." },
    { name: "Techfest 2025", location: "IIT Bombay, Maharashtra", participants: 8000, description: "Asia's largest science and technology festival with international exhibits and speakers." },
    { name: "Kshitij 2025", location: "IIT Kharagpur, West Bengal", participants: 6000, description: "Technical fest offering a platform for innovation, creativity, and problem-solving." },
    { name: "Cognizance 2025", location: "IIT Roorkee, Uttarakhand", participants: 5500, description: "Three-day festival with events spanning robotics, coding, and entrepreneurship." },
    { name: "Shaastra 2025", location: "IIT Madras, Tamil Nadu", participants: 7000, description: "India’s first ISO-certified student-run technical festival with diverse competitions." },
    { name: "Nvision 2025", location: "IIT Hyderabad, Telangana", participants: 3000, description: "Fosters creativity through competitions, guest talks, and hands-on workshops." },
    { name: "Rendezvous 2025", location: "IIT Delhi, Delhi", participants: 10000, description: "A fusion of tech, cultural, and literary activities engaging students nationwide." },
    { name: "Amalthea 2025", location: "IIT Gandhinagar, Gujarat", participants: 2000, description: "An amalgamation of learning, interaction, and innovation with industry experts." },
    { name: "Exodia 2025", location: "IIT Mandi, Himachal Pradesh", participants: 3500, description: "Annual festival combining tech, management, and cultural competitions." },
    { name: "Wissenaire 2025", location: "IIT Bhubaneswar, Odisha", participants: 4000, description: "A platform to showcase technical brilliance through workshops and contests." },
    { name: "Advitiya 2025", location: "IIT Ropar, Punjab", participants: 2500, description: "Technical extravaganza featuring AI, robotics, and machine learning events." },
    { name: "Techniche 2025", location: "IIT Guwahati, Assam", participants: 5500, description: "A blend of technical and management events fostering creativity and innovation." },
    { name: "Fluxus 2025", location: "IIT Indore, Madhya Pradesh", participants: 5000, description: "Interdisciplinary fest celebrating science, culture, and technology." },
    { name: "Celesta 2025", location: "IIT Patna, Bihar", participants: 4000, description: "A festival focusing on technological advancements and industrial innovations." },
    { name: "Ignus 2025", location: "IIT Jodhpur, Rajasthan", participants: 4500, description: "Annual fest combining tech, arts, and entrepreneurship in a grand celebration." },
    { name: "Kurukshetra 2025", location: "Anna University, Tamil Nadu", participants: 7000, description: "One of South India's biggest tech fests with diverse competitions and workshops." }
];

export default function Blog() {
    return (
        <div style={{ 
            // maxWidth: "1200px", 
            // margin: "0 auto", 
            padding: "40px 20px", 
            // background: "linear-gradient(135deg, #a8e063, #56ab2f)", 
            backgroundColor: "white",
            minHeight: "100vh"
        }}>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginBottom: "20px", color: "white" }}>Recent Tech Festivals 2025</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                {events.map((event, index) => (
                    <motion.div 
                        key={index} 
                        whileHover={{ scale: 1.05 }} 
                        style={{
                            padding: "20px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    >
                        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>{event.name}</h2>
                        <p style={{ color: "#666", marginBottom: "5px" }}>{event.location}</p>
                        <p style={{ color: "#777", marginBottom: "5px" }}>Participants: {event.participants}</p>
                        <p style={{ color: "#555" }}>{event.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}