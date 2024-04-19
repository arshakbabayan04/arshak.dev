import Icon from '../header/Icons';

import './footer.scss';

const Footer = () => {
    return ( 
        <footer className="footer" id="contacts">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_column">
                        <h3 className="footer_title">Company</h3>
                        <div className="footer_link_block">
                            <a href="/" className="footer_link">Home</a>
                            <a href="#about-me" className="footer_link">About</a>
                            <a href="#my-projects" className="footer_link">Projects</a>
                            <a href="#contacts" className="footer_link">Contacts</a>
                        </div>
                    </div>
                    <div className="footer_column">
                        <h3 className="footer_title">Contacts</h3>
                        <div className="footer_link_block">
                            <a href="tel:+37493064023" className="footer_link">+374 93 064023</a>
                            <a href="mailto:arshakbabayan52@gmail.com" className="footer_link">arshakbabayan52@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer_column">
                        <h3 className="footer_title">Social Network</h3>
                        <div className="footer_icons_block">
                            <a href="https://github.com/arshakbabayan04" className="footer_icons">
                                <Icon name="github_footer"/>
                            </a>
                            <a href="https://www.linkedin.com/in/arshak-babayan" className="footer_icons">
                                <Icon name="linkedIn_footer"/>
                            </a>
                            <a href="https://t.me/arshakbabayan" className="footer_icons">
                                <Icon name="telegram_footer"/>
                            </a>
                            <a href="https://www.instagram.com/arshak.babayan" className="footer_icons">
                                <Icon name="instagram_footer"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;