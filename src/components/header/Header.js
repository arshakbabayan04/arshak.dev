import { useState } from 'react';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

import './header.scss';
import { useEffect } from 'react';

const Header = ({toggleTheme, theme}) => {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [isLink, setIsLink] = useState(false);

    const toggleHamburger = (e) => {
        if (e.target.classList.contains('menu_link')) {
            setHamburgerActive(false);
            setIsLink(true);
        } else {
            setHamburgerActive(active => !active);
            setIsLink(false);
        }
    }

    useEffect(() => {
        if (hamburgerActive && !isLink) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [hamburgerActive])

    return ( 
        <header className="header" id="header">
            <div className="container">
                <div className="header_row">
                    <div className="logo">
                        <a href="/">Arshak.dev</a>
                    </div>
                    <nav>
                        <ul className={`menu ${hamburgerActive ? 'menu_active' : null}`}>
                            <li className="menu_item"><a href="#about-me" className="menu_link" onClick={toggleHamburger}>About</a></li>
                            <li className="menu_item"><a href="#my-projects" className="menu_link" onClick={toggleHamburger}>Projects</a></li>
                            <li className="menu_item"><a href="#contacts" className="menu_link" onClick={toggleHamburger}>Contacts</a></li>
                            <li className="menu_darkmode_btn">
                                <BtnDarkMode toggleTheme={() => toggleTheme()} theme={theme}/>
                            </li>
                        </ul>
                        <div className={`hamburger ${hamburgerActive ? 'hamburger_active' : null}`} onClick={toggleHamburger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div className={`menu_darkmode_btn ${hamburgerActive ? 'dark_btn_visible' : 'dark_btn_hidden'}`}>
                    <BtnDarkMode toggleTheme={() => toggleTheme()} theme={theme}/>
                </div>
            </div>
        </header>
    );
}
 
export default Header;