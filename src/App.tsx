import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<AboutMe />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;