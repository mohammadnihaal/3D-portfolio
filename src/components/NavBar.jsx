import { navLinks } from '../constants/index.js'
import {useEffect, useState} from "react";

const NavBar = () => {
        const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                const isScrolled = window.scrollY > 10;
                setScrolled(true);
            }

            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                Nihaal | Mohammad
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="/images/Resume/resume.pdf" className="contact-btn group md:px-10 px-5" download="/images/Resume/resume.pdf">
                    <div className="inner">
                        <span>Download My Resume</span>
                    </div>
                </a>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
