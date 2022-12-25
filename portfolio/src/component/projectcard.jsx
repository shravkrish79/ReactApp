import '../styles/projects.css';

export default function projectcard ({carddata,popup}) {
    const {bgc,id,title,image,isCompleted} = carddata;
    const imgurl = require(`../assests/projects/${image}`);
    return (
        <div className='project-card' onClick={isCompleted ? ()=>popup(id) : null}>
            {isCompleted === false && (
            <div className="project-text">
              <h4>Coming Soon</h4>
            </div>
          )}
            <img className={isCompleted ? "modalcard" : "blurcard"} src={imgurl} alt={image}></img>
            <span className={isCompleted ? "modalcard" : "blurcard"} id={bgc}>{title}</span>
        </div>
    );
};