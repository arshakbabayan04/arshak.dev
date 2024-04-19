import Icon from '../header/Icons';
import me_dark from '../../img/me_dark.png';
import me_light from '../../img/me_light.png';
import './promo.scss';

const Promo = ({theme}) => {
    return ( 
        <section className="promo">
            <div className="container promo_container">
                <div className="promo_light"></div>
                <div className="promo_content_wrapper">
                    <h1 className="promo_header">
                        Front-End React <br/> <span>Developer</span>
                    </h1>
                    <div className="descr promo_descr">
                        Hi, I'm Arshak Babayan. A creative Front-end React <br/> Developer based in Armenia.
                    </div>
                    <div className="promo_social_media_block">
                        <a href="https://www.linkedin.com/in/arshak-babayan"><Icon name={'linkedIn'}/></a>
                        <a href="https://github.com/arshakbabayan04"><Icon name={'github'}/></a>
                    </div>

                    <div className="tech_stack_block">
                        <span className='tech_stack_block_title'>Tech Stack</span>
                        <div className="tech_stack_block_icons">
                            <Icon name={'html'}/>
                            <Icon name={'css'}/>
                            <Icon name={'js'}/>
                            <Icon name={'react'}/>
                            <Icon name={'redux'}/>
                        </div>
                    </div>
                </div>
                <div className="promo_img_content">
                    <div className="promo_light light-2"></div>
                    <div className="promo_me_img_wrapper">
                        <img src={theme === 'default' ? me_dark : me_light} alt="me_photo" className='promo_me_img'/>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Promo;