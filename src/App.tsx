import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/Theme';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import ProjectsPage from './pages/Projects';
import ScrollToTop from './utils/ScrollToTop';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* More routes will be added here as we build more pages */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
