import { Routes, Route } from 'react-router-dom';
import Triangle from '../assets/icon/triangle'
import { CompetitionCard } from '../components/bhadri/competitioncard/competitioncard'
import { HomePage } from '../components/bhadri/homepage/homepage';
import { Navbar } from '../components/bhadri/navbar/navbar';
import { SemiCard } from '../components/bhadri/semicard/semicard'
import { LoginPage } from '../screens/login/login';
import { Home } from '../screens/home/home';
import Blog from '../screens/blog/blog';
import Scholarship from '../screens/Scholarship/scholarship';
import { About } from '../screens/about/about';
import { SignupScreen } from '../screens/signupScreen/signupScreen';
import { SignupOrgScreen } from '../screens/signuporgScreen/signuporgScreen';
import HostPage from '../screens/host/host';
import { Competition } from '../screens/competition/competition';
import { Student } from '../screens/student/student';

export function AppLayoutMain() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path='/signup' element={<SignupScreen/>}/>
            <Route path='/signuporg' element={<SignupOrgScreen/>}/>
            <Route path='/host' element={<HostPage/>}/>
            <Route path='/home' element={<><Navbar/><Home/></>}/>
            <Route path='/blog' element={<><Navbar/><Blog/></>}/>
            <Route path='/scholarship' element={<><Navbar/><Scholarship/></>}/>
            <Route path='/competition' element={<><Navbar/><Competition/></>}/>
            <Route path='/competition' element={<><Navbar/><CompetitionCard/></>}/>
            <Route path='/register' element={<><Navbar/><Student/></>}/>
            <Route path='/about' element={<><Navbar/><About/></>}/>
        </Routes>
    );
}