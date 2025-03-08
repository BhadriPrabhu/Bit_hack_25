import { SemiCard } from "../../components/bhadri/semicard/semicard";
import { CompetitionCard } from "../../components/bhadri/competitioncard/competitioncard";


export function Competition() {

    const eventData = [
        {
            id: 1,
            title: "Aqua Tech Innovators",
            collegeName: "Indian Institute of Technology",
            location: "Guwahati",
            eventType: "Hackathon",
        },
        {
            id: 2,
            title: "AI Revolution",
            collegeName: "Birla Institute of Technology",
            location: "Pilani",
            eventType: "Conference",
        },
        {
            id: 3,
            title: "CodeWar",
            collegeName: "Vellore Institute of Technology",
            location: "Vellore",
            eventType: "Coding Competition",
        },
        {
            id: 4,
            title: "Electro Fest",
            collegeName: "National Institute of Technology",
            location: "Surathkal",
            eventType: "Tech Fest",
        },
        {
            id: 5,
            title: "Robo Race",
            collegeName: "Indian Institute of Science",
            location: "Bangalore",
            eventType: "Robotics Competition",
        },
        {
            id: 6,
            title: "Green Energy Summit",
            collegeName: "Anna University",
            location: "Chennai",
            eventType: "Seminar",
        },
        {
            id: 7,
            title: "Space Explorers",
            collegeName: "Indian Institute of Space Science and Technology",
            location: "Thiruvananthapuram",
            eventType: "Workshop",
        },
        {
            id: 8,
            title: "Cyber Shield",
            collegeName: "IIIT Hyderabad",
            location: "Hyderabad",
            eventType: "Cyber Security Event",
        },
        {
            id: 9,
            title: "BioMed Conclave",
            collegeName: "AIIMS",
            location: "Delhi",
            eventType: "Medical Conference",
        },
        {
            id: 10,
            title: "Data Sprint",
            collegeName: "IIM Bangalore",
            location: "Bangalore",
            eventType: "Data Science Hackathon",
        },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "20px", }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {eventData.map((item) => {
                    return (
                        <SemiCard key={item.id} title={item.title} collegeName={item.collegeName} location={item.location} eventType={item.eventType} />
                    );
                })}            </div>
            <div>
                <CompetitionCard
                    title="Aqua Tech Innovators"
                    collegeName="Indian Institute of Technology, Guwahati"
                    eventName="Techritik"
                    location="Online"
                    teamSize="4"
                    website="https://kce.ac.in/national-conference-on-sustainable-materials-automotive-technologies-and-artificial-intelligence-smatai/"
                    prize="I YEAR - 1200; II YEAR -1200; III YEAR -2000; IV YEAR -2000"
                    imageSrc="https://example.com/event-image.jpg"
                />
            </div>
        </div>
    );
}