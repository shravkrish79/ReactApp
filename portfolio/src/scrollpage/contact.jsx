import '../styles/contact.css';
import ContactData from '../data/Contact_data.json';
import ContactCard from '../component/contactcard';
import Github from '../assests/contacts/github.png';
import Linkedin from '../assests/contacts/linkedin.png';
export default function contact() {
    const contactItem = ContactData.map((recs) => (
        <ContactCard key={recs.id} data={recs} />
    )
    );
    return (
        <div className="contact" id="contact">
            <div className="contact-title">Contact</div>
            <div className="contact-desc">
                <p>Here is my contact information if you are interested in starting a collaboration</p></div>
            <div className="contact-detail">{contactItem}</div>
            <div className="footer">
                <div className="footer-icon">
                    <a href="https://github.com/Poongothai-R/" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github-logo" /> </a>
                    <a href="https://www.linkedin.com/in/poongothai-rajesh-38320087/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="linkedin-logo" /> </a>
                </div>
                <div className='copyright'><span>©  Poongothai Rajesh 2022</span></div>
            </div>

        </div>
    );
};