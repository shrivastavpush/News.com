import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Newspaper } from 'react-bootstrap-icons';

const NavBar = ({ categories }) => {
    const location = useLocation();

    const isActive = (category) => {
        if (category === 'general') {
            return location.pathname === '/';
        }
        return location.pathname === `/${category}`;
    };

    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="shadow-sm"
            style={{ backgroundColor: 'var(--background-light)' }}
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="d-flex align-items-center gap-2"
                    style={{
                        color: 'var(--primary-color)',
                        fontWeight: '700',
                        fontSize: '1.5rem'
                    }}
                >
                    <Newspaper size={24} />
                    News.com
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {categories.map(category => (
                            <Nav.Link
                                key={category}
                                as={Link}
                                to={category === 'general' ? '/' : `/${category}`}
                                className={`px-3 py-2 rounded-pill mx-1 ${isActive(category) ? 'active' : ''}`}
                                aria-current={isActive(category) ? 'page' : undefined}
                                style={{
                                    color: isActive(category) ? 'var(--primary-color)' : 'var(--text-secondary)',
                                    fontWeight: isActive(category) ? '500' : '400',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;