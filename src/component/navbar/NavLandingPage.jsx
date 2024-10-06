import './navbar.css'
import { useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react'

export const NavLandingPage = () => {
    const labels = [
        { href: '#mainHero', label: 'Home' },
        { href: '#PlaceCard', label: 'Place To Visit' },
        { href: '#FoodCard', label: 'Food & Bevarage' },
        { href: '#HotelCard', label: 'Hotel' },
    ]

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const heroSection = document.querySelector('.hero-header');
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        const scrollPosition = window.scrollY;

        // Jika scrollY lebih besar dari tinggi hero, maka navbar menjadi sticky dengan background
        if (scrollPosition > heroHeight) {
        setIsSticky(true);
        } else {
        setIsSticky(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const location = useLocation()
    const hash = location.hash
    return(
        <header >
            <nav className={`navbar navbar-expand-lg fixed-top py-3 px-3 px-md-4 px-xxl-0 ${isSticky ? 'navbar-scrolled' : ''}`}>
                <div className="container-xxl d-flex flex-row justify-content-between px-0">
                    <img
                        width={231}
                        height={62}
                        // src={Logo}
                        // alt="Place"
                        className="brand-logo" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mt-3" id="navbarNav">
                        <ul className="navbar-nav">
                            {labels.map((menu, index) => (
                                <li key={index} className="nav-item link-offset-3-hover mx-3">
                                    <a
                                        className={`fw-medium ${menu.href === hash ? 'nav-item-active' : 'nav-item-a'}`}
                                        href={menu.href}
                                    >
                                        {menu.label}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="mainHero" className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown fw-semibold">
                        {" "}
                        Time To Trip
                        </h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown">
                        Temukan Destinasi Wisata Anda Disini, Rasakan Kebahagiaan Tiada Tara di Setiap Tujuan Wisata!
                        </p>
                        {/* <div className="position-relative w-75 mx-auto animated slideInDown">
                        <input
                            className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                            type="text"
                            placeholder="Eg: Thailand"
                        />
                        <button
                            type="button"
                            className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                            style={{ marginTop: 7 }}
                        >
                            Search
                        </button>
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>

        </header>
    )
}