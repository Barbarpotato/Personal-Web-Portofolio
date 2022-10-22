import { Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Navigation(props) {
    return (
        <motion.div className='row navigation'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
            viewport={{ once: true }}>
            <Nav className="justify-content-center" activeKey="link1">
                <Nav.Item>
                    <Nav.Link className={props.theme ? 'navLink' : 'navlinkDark'} href="#profile" eventKey="link-0">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={props.theme ? 'navLink' : 'navlinkDark'} href='#journey' eventKey="link-1">Journey</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={props.theme ? 'navLink' : 'navlinkDark'} href='#softskill' eventKey="link-2">Soft Skill</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={props.theme ? 'navLink' : 'navlinkDark'} href='#hardskill' eventKey="link-3">
                        Hard Skill
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={props.theme ? 'navLink' : 'navlinkDark'} href='#contactme' eventKey="link-4">
                        Contact
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </motion.div>
    )
};

export default Navigation;