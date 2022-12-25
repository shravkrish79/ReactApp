import ProjectData from '../data/Project_data.json';
import ProjectCard from '../component/projectcard';
import ModalCard from '../component/modalcard';
import '../styles/projects.css';

export default function projects({setShowModal}) {

    const ProjectList = ProjectData.map((recs) => (

        <ProjectCard key={recs.id} carddata={recs}
            popup={()=>setShowModal(<ModalCard modaldata={recs}/>)}
            />
    ));

    return (
        <div className='projects' id="projects">
            <div className='project-title'>Projects</div>
            <div className='project-desc'><p>Here are the projects I will be working on during the Frontend course at Novare Potential.</p>
                <div className='project-list'>{ProjectList}</div>
            </div>
        </div>
    );
};