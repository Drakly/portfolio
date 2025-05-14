import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToElement } from '../../utils/scrollToElement';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: var(--transition);
  
  &.scrolled {
    background-color: rgba(15, 15, 39, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
  }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--light);
  cursor: pointer;
  
  span {
    color: var(--primary);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.div)`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: var(--light);
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    
    span {
      width: 100%;
      height: 2px;
      background-color: var(--light);
      transition: var(--transition);
    }
    
    &.open {
      span:first-child {
        transform: translateY(9px) rotate(45deg);
      }
      
      span:nth-child(2) {
        opacity: 0;
      }
      
      span:last-child {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--dark);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    z-index: 100;
  }
`;

const MobileNavLink = styled(motion.div)`
  font-size: 2rem;
  font-weight: 600;
  color: var(--light);
  cursor: pointer;
  
  &.active {
    color: var(--primary);
  }
`;

// Define navigation items with section IDs
const navItems = [
  { title: 'Home', path: '/', section: 'hero' },
  { title: 'About', path: '/#about', section: 'about' },
  { title: '3D Scene', path: '/#3d-scene', section: '3d-scene' },
  { title: 'Projects', path: '/projects', section: 'projects' },
  { title: 'Contact', path: '/#contact', section: 'contact' },
];

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const navItemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 }
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll events to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update active section based on URL
  useEffect(() => {
    if (location.pathname === '/projects') {
      setActiveSection('projects');
    } else if (location.pathname === '/') {
      // If on home page with a hash, set that section as active
      const hash = location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection('hero');
      }
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const handleNavClick = (section: string, path: string) => {
    if (path === '/projects') {
      // Navigate to the projects page
      navigate('/projects');
      setActiveSection('projects');
    } else if (location.pathname === '/' && section) {
      // If we're already on the home page, just scroll to the section
      scrollToElement(section, -80);
      setActiveSection(section);
    } else {
      // Navigate back to home and scroll to section
      navigate('/');
      // Need a small delay to ensure the page loads before scrolling
      setTimeout(() => {
        scrollToElement(section, -80);
        setActiveSection(section);
      }, 100);
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <NavbarContainer className={isScrolled ? 'scrolled' : ''}>
      <NavInner>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleNavClick('hero', '/')}
        >
          kristian<span>.dev</span>
        </Logo>
        
        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={activeSection === item.section ? 'active' : ''}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleNavClick(item.section, item.path)}
            >
              {item.title}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton 
          className={isMobileMenuOpen ? 'open' : ''} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item, index) => (
                <MobileNavLink
                  key={index}
                  className={activeSection === item.section ? 'active' : ''}
                  variants={navItemVariants}
                  onClick={() => handleNavClick(item.section, item.path)}
                >
                  {item.title}
                </MobileNavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavInner>
    </NavbarContainer>
  );
};

export default Navbar; 