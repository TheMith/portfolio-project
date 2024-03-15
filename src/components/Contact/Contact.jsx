import { useJsonData } from '../../services/hook.js';

export function Contact() {

    const jsonData = useJsonData();

    if (!jsonData) {
        return <div>Loading...</div>;
    }

    return (
        <section id='contact' className="contact">
            <h2 className='contactTitle'>{jsonData.contact.title}</h2>
            <div className="socialIcons">
                <a href="https://www.linkedin.com/in/estevamfilho227/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/TheMith" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>
    );
}