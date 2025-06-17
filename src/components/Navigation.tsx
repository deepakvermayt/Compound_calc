import React from 'react';

type Section = 'calculator' | 'faq' | 'disclaimer' | 'privacy' | 'contact';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  mobile?: boolean;
  onNavigate?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection, 
  mobile = false, 
  onNavigate 
}) => {
  const handleNavigation = (section: Section) => {
    setActiveSection(section);
    if (onNavigate) onNavigate();
  };

  const baseClasses = mobile 
    ? "block px-3 py-2 rounded-md text-base font-medium transition-colors"
    : "px-3 py-2 rounded-md text-sm font-medium transition-colors";

  const activeClasses = mobile
    ? "bg-blue-100 text-blue-700"
    : "bg-blue-100 text-blue-700";

  const inactiveClasses = mobile
    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100";

  const navItems = [
    { key: 'calculator', label: 'Calculator' },
    { key: 'faq', label: 'FAQ' },
    { key: 'disclaimer', label: 'Disclaimer' },
    { key: 'privacy', label: 'Privacy' },
    { key: 'contact', label: 'Contact' },
  ] as const;

  return (
    <>
      {navItems.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleNavigation(key)}
          className={`${baseClasses} ${
            activeSection === key ? activeClasses : inactiveClasses
          }`}
        >
          {label}
        </button>
      ))}
    </>
  );
};

export default Navigation;