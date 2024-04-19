import computer_dark from '../../img/computer_dark.png';
import computer_light from '../../img/computer_light.png';
import './about.scss';

const About = ({theme}) => {
    return ( 
        <section className="about" id="about-me">
            <div className="container">
                <div className="about_text">
                    <h2 className="section_header about_header">About me</h2>
                    <div className="subheader about_subheader">My path to front-end <br/> development</div>
                    <div className="descr about_descr">
                        My venture into the world of front-end development started in my early years.
                        I developed a deep passion for computing, relishing the intricacies of how it all comes together.
                        Today, I find myself fortunate to be immersed in my true calling,
                        front-end development. Collaborating closely with my brother,
                        a talented UX/UI designer, we embark on exciting projects of our own.
                    </div>
                </div>  
                <img src={theme === 'default' ? computer_dark : computer_light} alt="About" className='about_img'/>
            </div>
        </section>
    );
}
 
export default About;