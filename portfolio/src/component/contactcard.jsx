import '../styles/contact.css';

export default function contactcard({ data }) {
    const { title, link, image } = data;
    const contactImgURL = require(`../assests/contacts/${image}`);
    return (
        <div className="contact-item">
            <a href={link} target='_blank' rel="noreferrer">
                <div className="contact-item-left">
                    <img src={contactImgURL} alt='contact logo' />
                </div>
                <div className="contact-item-right">
                    {title}
                </div>
            </a>
        </div>
    )

} 