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

export function AppLayoutMain() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path='/signup' element={<SignupScreen/>}/>
            <Route path='/signuporg' element={<SignupOrgScreen/>}/>
            <Route path='/home' element={<><Navbar/><Home/></>}/>
            <Route path='/blog' element={<><Navbar/><Blog/></>}/>
            <Route path='/scholarship' element={<><Navbar/><Scholarship/></>}/>
            <Route path='/competition' element={<><Navbar/><CompetitionCard/></>}/>
            <Route path='/about' element={<><Navbar/><About/></>}/>
        </Routes>
    );
}