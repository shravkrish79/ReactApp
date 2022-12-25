
import '../styles/modal.css';
<styles />
export default function modalcard({ modaldata }) {

    const { title, description, technologies,
        screenshot, githubURL, websiteURL } = modaldata;

    const imgURL = require(`../assests/screenshots/${screenshot}`);

    const skills = technologies.map((item, index) => (
        <span key={index}>{item}</span>
    ));

    return (
        <div className="modal-container">
            <div className="modal-left">
                <img src={imgURL} alt="project_image" />
            </div>
            <div className="modal-right">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="modal-tech">{skills}</div>
                <div className="modal-btn">
                    <button className="btn" id="gitbtn">
                        <a href={githubURL} target="_blank" rel="noreferrer">
                            Git Repository
                        </a>
                    </button>
                    <button className="btn" id="webbtn">
                        <a href={websiteURL} target="_blank" rel="noreferrer">
                            Visit App-website
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};