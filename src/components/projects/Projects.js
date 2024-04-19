import './projects.scss';
import ProjectsItem from '../projectsItem/ProjectsItem';

const Projects = () => {
    return ( 
        <section className="projects" id="my-projects">
            <div className="container">
                <h2 className="section_header">Projects</h2>
                <div className="subheader projects_subheader">
                    Each project is a unique piece<br/> of development
                </div>
                <ul className="projects_list">
                    <ProjectsItem 
                        title={'Marvel'} 
                        descr={'Explore Marvel characters seamlessly with our React-powered site. Dive into detailed profiles of your favorite heroes and villains. Effortlessly find all you need as you navigate through our pages'} 
                        stack={['React', 'React Router', 'Scss', 'Formik', 'Yup']}
                        github_url={'https://github.com/arshakbabayan04/marvelStarter'}
                        url={'https://marvel-starter99.vercel.app'}/>    

                </ul>
            </div>
        </section>
    );
}
 
export default Projects;