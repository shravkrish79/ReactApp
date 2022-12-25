import '../styles/tech.css';

export default function techcard({techdata}) {
    const{title,image} = techdata;
    const techImgURL = require(`../assests/skills/${image}`);
    return(
        <div className="tech-item">
            <img src={techImgURL} alt="skill-logo"/>
            <h6>{title}</h6>
        </div>
    );
};