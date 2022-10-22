import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Overlay, Tooltip } from 'react-bootstrap';

function Footer(props) {

    // this variable is used to show the tooltip in email address icon in footer
    const [show, setShow] = useState(false);
    const target = useRef(null);

    // get current year for copyright footer
    const getYear = () => {
        const year = new Date();
        return year.getFullYear();
    };

    // copy email address to the clipboard
    const getEmailAddress = () => {
        const email = 'darmawanjr88@gmail.com';
        navigator.clipboard.writeText(email);
    };

    return (
        <div className="row">
            <hr className={props.theme ? 'horizontal' : 'darkhorizontal'} style={{ "marginTop": 50 }}></hr>

            <motion.div className='row footer-Content' id='contactme'>

                <h4 style={{ 'opacity': 0.8, 'paddingTop': 50 }}>Contact Me:</h4>
                <div className='col col-sm-7'>
                    <p style={{ 'fontSize': 20, 'opacity': 0.8, 'paddingBottom': 50 }}>If you have general questions about myself and what I can do for you,
                        you can contact me via email or social media.
                    </p>
                </div>
                <div className='col col-sm-5' style={{ 'textAlign': 'center' }}>

                    <a className="btn btn-social-icon btn-google" style={props.theme ? { 'color': 'black' } : { 'color': 'white' }} href='https://www.instagram.com/darmajr94/'> <i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                    <a className="btn btn-social-icon btn-google" style={props.theme ? { 'color': 'black' } : { 'color': 'white' }} href='https://www.linkedin.com/in/darmawan-jr-b16135220' > <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
                    <a className="btn btn-social-icon btn-google" style={props.theme ? { 'color': 'black' } : { 'color': 'white' }} href='https://github.com/Barbarpotato'> <i className="fa fa-github fa-lg" aria-hidden="true"></i></a>

                    <button ref={target} className="btn btn-social-icon btn-google" onClick={() => {
                        getEmailAddress()
                        setShow(!show)
                    }}
                        style={props.theme ? { 'color': 'black' } : { 'color': 'white' }}>
                        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i></button>
                    <Overlay target={target.current} show={show} placement="right">
                        {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                                Email Address has been copied to clipboard!
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
            </motion.div>

            <hr className={props.theme ? 'horizontal' : 'darkhorizontal'}></hr>
            <h5 style={{ 'opacity': 0.5, 'textAlign': 'center' }}>{getYear()} <i className="fa fa-copyright" aria-hidden="true"></i>  Darmawan</h5>
        </div>
    );
};

export default Footer;