//scholarship page

import React from "react";

const scholarships = [
  {
    title: "Post-Matric Scholarships For Students With Disabilities 2025",
    degrees: "High/Secondary School, Bachelors, Masters, PhD",
    courses: "All subjects",
    nationalities: "Indian students with disabilities",
    location: "India & Overseas",
    funding: "Partial Funding",
    deadline: "31 Mar, 2025",
    expiresIn: "24 days",
  },
  {
    title: "Merit-Based International Scholarships 2025",
    degrees: "Bachelors, Masters",
    courses: "STEM, Business, Arts",
    nationalities: "Open for all countries",
    location: "Available worldwide",
    funding: "Full Funding",
    deadline: "15 Apr, 2025",
    expiresIn: "40 days",
  },
  {
    title: "Women in Tech Scholarship 2025",
    degrees: "Undergraduate, Graduate",
    courses: "Computer Science, IT, AI",
    nationalities: "Open for women applicants globally",
    location: "USA, Canada, UK, India",
    funding: "Partial Funding",
    deadline: "10 May, 2025",
    expiresIn: "55 days",
  },
  {
    title: "Sports Excellence Scholarship 2025",
    degrees: "Any degree",
    courses: "Sports Management, Physical Education",
    nationalities: "Open for all",
    location: "Various universities worldwide",
    funding: "Full Funding",
    deadline: "20 Jun, 2025",
    expiresIn: "90 days",
  },
  {
    title: "Research Fellowship Grants 2025",
    degrees: "PhD, Postdoctoral",
    courses: "Science, Medicine, Engineering",
    nationalities: "Global applicants welcome",
    location: "Research institutions worldwide",
    funding: "Stipend & Research Grants",
    deadline: "30 Jul, 2025",
    expiresIn: "120 days",
  }
];

const Scholarship = () => {
  const containerStyle = {
    // maxWidth: "800px",
    // margin: "40px auto",
    padding: "25px",
    backgroundColor: "white",
    color: "#E0E0E0",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    padding: "20px",
    backgroundColor: "#1A2332",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 255, 255, 0.1)",
    marginBottom: "20px",
  };

  const headerStyle = {
    color: "#00E5FF",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      {scholarships.map((scholarship, index) => (
        <div key={index} style={cardStyle}>
          <h2 style={headerStyle}>🚀 {scholarship.title}</h2>
          <p><strong>📜 Eligible Degrees:</strong> {scholarship.degrees}</p>
          <p><strong>📚 Eligible Courses:</strong> {scholarship.courses}</p>
          <p><strong>🌍 Eligible Nationalities:</strong> {scholarship.nationalities}</p>
          <p><strong>📍 Available In:</strong> {scholarship.location}</p>
          <p><strong>💰 Funding Type:</strong> {scholarship.funding}</p>
          <p><strong>⏳ Deadline:</strong> {scholarship.deadline}</p>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <span style={{ color: "#00E5FF", border: "2px solid #00E5FF", padding: "5px 10px", borderRadius: "8px", fontWeight: "bold" }}>⏳ Expires in {scholarship.expiresIn}</span>
          </div>
          <div style={buttonContainer}>
            <button style={{ ...buttonStyle, backgroundColor: "#FF9800", color: "white" }}>⭐ Shortlist</button>
            <button style={{ ...buttonStyle, backgroundColor: "#00E5FF", color: "#000" }}>✏ View & Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scholarship;