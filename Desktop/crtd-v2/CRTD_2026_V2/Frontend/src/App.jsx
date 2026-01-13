import { Routes, Route } from 'react-router-dom'
import './App.css'

// Import components/pages
// import Home from "./components/web_site/pages/home/Home";

// import FresherJobs from './components/web_site/pages/fresher/Fresher';
// import Services from './components/web_site/pages/services/Services';
// import SignUpPage from './components/web_site/pages/Register/SignUpPage';
// import LoginPage from './components/web_site/pages/Login/LoginPage';
// import Footer from './components/web_site/Footer';
import Navbar from './components/web_site/Navbar';
// import NotFound from './components/web_site/NotFound';

function App() {
  return (
    <>
      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fresher-jobs" element={<FresherJobs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  )
}

export default App
