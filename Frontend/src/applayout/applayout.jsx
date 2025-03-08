import Triangle from '../assets/icon/triangle'
import { CompetitionCard } from '../components/bhadri/competitioncard/competitioncard'
import { HomePage } from '../components/bhadri/homepage/homepage';
import { Navbar } from '../components/bhadri/navbar/navbar';
import { SemiCard } from '../components/bhadri/semicard/semicard'

export function AppLayout() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Navbar/>
            <HomePage/>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "20px", }}>
                <div>
                    <SemiCard title="Aqua Tech Innovators" collegeName="Indian Institute of technology" location="Guwahati" eventType="hackathon" />
                </div>
                <div>
                    <CompetitionCard />
                </div>
            </div>
            <Triangle />
        </div>
    );
}