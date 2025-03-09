import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Newspaper } from 'react-bootstrap-icons';

const Navbar = ({ categories }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (category) => {
        if (category === 'general') {
            return location.pathname === '/';
        }
        return location.pathname === `/${category}`;
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <Link
                    className="navbar-brand d-flex align-items-center gap-2"
                    to="/"
                    style={{
                        color: '#1a73e8',
                        fontWeight: '700',
                        fontSize: '1.5rem'
                    }}
                >
                    <Newspaper size={24} />
                    News.com
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {categories.map(category => (
                            <li key={category} className="nav-item">
                                <Link
                                    className={`nav-link px-3 py-2 rounded-pill mx-1 ${isActive(category) ? 'active' : ''}`}
                                    to={category === 'general' ? '/' : `/${category}`}
                                    aria-current={isActive(category) ? 'page' : undefined}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        color: isActive(category) ? '#1a73e8' : '#5f6368',
                                        fontWeight: isActive(category) ? '500' : '400',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;