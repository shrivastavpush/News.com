import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ categories }) => {

    return (
        <nav className="navbar navbar-expand-lg bg-warning sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/" style={{ color: '#2d3436' }}>News.com</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {categories.map(category => (
                            <li key={category} className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={category === 'general' ? '/' : `/${category}`}
                                    aria-current={category === 'home' ? 'page' : undefined}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar