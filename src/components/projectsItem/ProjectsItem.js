import Icon from "../header/Icons";
import marvelStarter from '../../img/projects/marvel-starter.jpg';

import './projectsItem.scss';

const ProjectsItem = ({title, descr, stack, github_url, url}) => {
    return ( 
        <li className="project_wrapper">
            <div className="project_img">
                <img src={marvelStarter} alt="Card" />
            </div>
            <div className="project_text">
                <div className="section_header">{title}</div>
                <div className="descr project_text_descr">{descr}</div>
                <div className="project_text_stack">
                    {stack && stack.map((item, i) => {
                        return (
                            <div key={i} className="project_text_stack_item">{item}</div>
                        )
                    })}
                </div>
                <div className="project_text_btn_block">
                    <div className="project_text_btn">
                        <a href={github_url}>
                            Code
                            <Icon name={'github_prg'}/>
                        </a>
                    </div>
                    <div className="project_text_btn">
                        <a href={url}>
                            Live Demo
                            <Icon name={'vector'}/>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}
 
export default ProjectsItem;