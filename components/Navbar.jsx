import React, { useState, useRef, useEffect } from 'react';
import { tabs } from '../static/Tabs'; // Ensure this file defines which tabs have dropdowns
import { menuIcon, searchIcon, downArrowIcon } from '../static/Icon';

function Navbar() {
    const [isOpen, setIsOpen] = useState(null); // Track which submenu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if mobile menu is open
    const hoverTimeoutRef = useRef(null); // Ref for hover delay
    const navbarRef = useRef(null); // Ref for the navbar component

    // Delayed submenu hiding on mouse leave
    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsOpen(null);
        }, 300); // 300ms delay before hiding the submenu
    };

    // Cancel hiding if re-entered
    const handleMouseEnter = (index) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsOpen(index);
    };

    // Toggle submenu visibility on click for small screens
    const toggleSubmenu = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    // Toggle mobile menu visibility
    const toggleNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Effect to close the navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-[#1a153c] text-white z-50 relative">
            <div ref={navbarRef} className="max-w-screen-xl mx-auto px-4 py-6 lg:flex justify-between items-center">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
                    <button className="lg:hidden" onClick={toggleNavbar}>
                        {menuIcon}
                    </button>
                </div>

                <div className="hidden lg:flex space-x-4 items-center">
                    {tabs.map((link, index) => (
                        <div key={index} className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}>
                            <a href={link.path} className="hover:underline text-[15px] flex items-center cursor-pointer"
                                onClick={(e) => {
                                    if (link.submenu) {
                                        e.preventDefault();
                                        toggleSubmenu(index);
                                    }
                                }}>
                                {link.name} {link.submenu && downArrowIcon}
                            </a>
                            {isOpen === index && link.submenu && (
                                <div className="absolute left-0 mt-2 py-2 w-40 bg-white text-black rounded shadow-lg">
                                    {link.submenu.map((item, subIndex) => (
                                        <a key={subIndex} href={item.path} className="block px-4 py-2 text-sm hover:bg-gray-200">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="px-4 py-2 rounded-full border-[#feb802] border-2 text-primary">APPLY NOW</button>
                    {searchIcon}
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden bg-indigo-800 p-4 absolute top-[25%] left-0 right-0 z-50 relative">
                        {tabs.map((link, index) => (
                            <div key={index}>
                                <a href={link.path} className="block text-white py-2 flex justify-between items-center"
                                    onClick={(e) => {
                                        if (link.submenu) {
                                            e.preventDefault();
                                            toggleSubmenu(index);
                                        }
                                    }}>
                                    {link.name} {link.submenu && downArrowIcon}
                                </a>
                                {isOpen === index && link.submenu && (
                                    <div className="py-2">
                                        {link.submenu.map((item, subIndex) => (
                                            <a key={subIndex} href={item.path} className="block px-4 py-2 text-white hover:bg-gray-700">
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="block w-full text-center px-4 py-2 rounded-full border-[#feb802] border-2 text-primary">APPLY NOW</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
