import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  mobile = false, 
  onNavigate 
}) => {
  const location = useLocation();

  const handleNavigation = () => {
    if (onNavigate) onNavigate();
  };

  const baseClasses = mobile 
    ? "block px-3 py-2 rounded-md text-base font-medium transition-colors"
    : "px-3 py-2 rounded-md text-sm font-medium transition-colors";

  const getClasses = (path: string) => {
    const isActive = location.pathname === path || 
      (path === '/calculator' && location.pathname === '/compound-interest-calculator') ||
      (path === '/faq' && location.pathname === '/frequently-asked-questions') ||
      (path === '/contact' && location.pathname === '/contact-us');
    
    const activeClasses = mobile
      ? "bg-blue-100 text-blue-700"
      : "bg-blue-100 text-blue-700";

    const inactiveClasses = mobile
      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/calculator', label: 'Calculator' },
    { path: '/faq', label: 'FAQ' },
    { path: '/disclaimer', label: 'Disclaimer' },
    { path: '/privacy-policy', label: 'Privacy' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          onClick={handleNavigation}
          className={getClasses(path)}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default Navigation;