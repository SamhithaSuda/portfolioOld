import React from 'react';
import ContactItem from '../components/ContactItem';
import email from '../images/emailme.svg';
import location from '../images/location.svg';
import Title from '../components/Title';
import { FaLinkedin, FaFacebook, FaTwitter, FaGithubSquare, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div>
            <div className="title">
                <Title title={'Contact'} span={'Contat'} />
            </div>
            <div className='ContactPage'>
                <div className="map-sect">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.3862189389183!2d-96.75244088482489!3d32.99359168090713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea034b871b9c5%3A0x55798f08c71c7e72!2sNorthside%20Apartments!5e0!3m2!1sen!2sus!4v1677433472571!5m2!1sen!2sus" width="600" height="450"  style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={email} text={'sudasamhitha@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text={'Dallas, TX, USA'} title={'Location'} />
                </div>
            </div>
            <Title title={'My socials'} span={'Socials'} />
            <div className="icons">
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/nirban-chakraborty-382778191/">
                        <FaLinkedin size={42} />
                    </a>
                    <span className="tooltiptext">Linkedin</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://twitter.com/NirbanChakrab10">
                        <FaTwitter size={42} />
                    </a>
                    <span className="tooltiptext">Twitter</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://github.com/nirban256">
                        <FaGithubSquare size={42} />
                    </a>
                    <span className="tooltiptext">Github</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://www.instagram.com/nirban_1327/">
                        <FaInstagram size={42} />
                    </a>
                    <span className="tooltiptext">Instagram</span>
                </li>
                <li className='tooltip'>
                    <a target="_blank" rel='noreferrer' href="https://www.facebook.com/nirban.chakraborty.581">
                        <FaFacebook size={42} />
                    </a>
                    <span className="tooltiptext">Facebook</span>
                </li>
            </div>
        </div>
    );
};

export default ContactPage;
