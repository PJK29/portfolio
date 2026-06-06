import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* <div className="fixed inset-0 bg-slate-100 -z-10"></div>
        <div className="bg-[#f4f4f2] fixed inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:38px_38px] -z-10"></div>
        <div className="fixed inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,#00000008_3px,#00000008_4px)] -z-10"></div>        <ScrollToHash /> */}
        <div className="fixed inset-0 -z-10 bg-[#f4f4f2]"></div>
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:38px_38px]"></div>
        <div className="fixed inset-0 -z-10 opacity-[0.08] translate-x-[0.5px] translate-y-[0.5px] bg-[linear-gradient(to_right,#00000025_1px,transparent_1px),linear-gradient(to_bottom,#00000025_1px,transparent_1px)] bg-[size:38px_38px]"></div>
        <div className="fixed inset-0 bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_3px,#00000008_3px,#00000008_4px)] -z-10"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}