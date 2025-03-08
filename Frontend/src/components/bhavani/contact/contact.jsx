import { useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaTelegram, FaDiscord, FaYoutube } from "react-icons/fa6";

export default function Contact() {
    const [email, setEmail] = useState("");

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: "white", padding: "20px", marginTop: "20px" }}>
            <div style={{ width: "100%", maxWidth: "1100px", backgroundColor: "#162447", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "left" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#4fa3ff" }}>How to contact Eventhon</h2>
                <p>Find all details about our tech events, hackathons, and networking opportunities on our official portal.</p>
                <p>For any queries, reach out to us through our support system. Please note that we do not provide telephone support.</p>
                
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#72b2ff", marginTop: "16px" }}>Support</h3>
                <p>For any assistance regarding Eventhon, click the ‘support’ button on our event pages.</p>
                <p>Alternatively, submit a request directly. Please check our FAQ before reaching out.</p>
                <p>Stay updated with our latest event announcements by following our social media channels.</p>
                <p>If you have any concerns, check our support guidelines.</p>
                
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#72b2ff", marginTop: "16px" }}>Want to host an event with us?</h3>
                <p>Partner with Eventhon to organize impactful hackathons and technical events.</p>
                <p>Get in touch today by filling out our partnership form and collaborate with us to create amazing experiences.</p>
                
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#72b2ff", marginTop: "16px" }}>Corporate Engagement</h3>
                <p>Upskill your workforce by hosting tech events with Eventhon. We help companies engage with top talent in the industry.</p>
                <p>Contact us today to explore opportunities with Eventhon.</p>
                
                <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#72b2ff", marginTop: "16px" }}>Share Your Eventhon Experience</h3>
                <p>We would love to feature your story on our platform. Share your experiences by filling out our success story form.</p>
                <p>Follow us on X, LinkedIn, Telegram, and YouTube to stay updated.</p>
            </div>

            <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#4fa3ff", marginTop: "20px", marginBottom: "10px" }}>Eventhon</h1>
            <p style={{ fontSize: "18px", color: "gray" }}>Bringing tech enthusiasts together, worldwide.</p>

            <div style={{ width: "100%", maxWidth: "1100px", backgroundColor: "#162447", padding: "24px", borderRadius: "8px", textAlign: "center", marginTop: "14px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#72b2ff" }}>Stay Connected</h2>
                <p><strong>Event Inquiries:</strong> contact@eventhon.com</p>
                <p>📞 +91-9311777388 (Mon to Fri, 9 AM to 6 PM)</p>
                <p><strong>Support:</strong> support@eventhon.com</p>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontSize: "24px", color: "#4fa3ff", marginTop: "24px" }}>
                <FaInstagram />
                <FaLinkedin />
                <FaXTwitter />
                <FaTelegram />
                <FaDiscord />
                <FaYoutube />
            </div>

            <div style={{ width: "100%", maxWidth: "1100px", backgroundColor: "#162447", padding: "24px", borderRadius: "8px", textAlign: "center", marginTop: "24px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#72b2ff" }}>Stay Updated</h2>
                <p style={{ fontSize: "14px", color: "gray" }}>Subscribe for updates on upcoming tech events and hackathons.</p>
                <div style={{ display: "flex", width: "300px", marginTop: "16px", justifyContent: "center" }}>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Subscribe to our newsletter!" 
                        style={{ flex: 1, padding: "8px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px", border: "none" }}
                    />
                    <button style={{ backgroundColor: "#4fa3ff", padding: "8px", borderTopRightRadius: "4px", borderBottomRightRadius: "4px", border: "none", }}>➤</button>
                </div>
            </div>
        </div>
    );
}
