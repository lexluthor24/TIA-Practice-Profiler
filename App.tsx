
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Questionnaire from './pages/Questionnaire';
import Results from './pages/Results';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
};

export default App;