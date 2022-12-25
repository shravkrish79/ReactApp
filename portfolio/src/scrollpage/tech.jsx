import '../styles/tech.css';
import SkillData from '../data/Tech_icon.json';
import TechCard from '../component/techcard';

export default function tech() {

    const techList = SkillData.map((recs) => (
        <TechCard key={recs.id} techdata={recs}/>
    )
    );

    return (
        <div className="skills" id="tech">
            <div className="tech-title"><h1>Technical Skills</h1></div>
            <div className='tech-desc'><p>Here is the technologies that I already know and also started to learn.</p></div>
            <div className="tech-list">{techList}</div>
        </div>

    );
};