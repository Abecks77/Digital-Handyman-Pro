import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ServiceAreasPage from './ServiceAreasPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
      </Routes>
    </Router>
  );
}
