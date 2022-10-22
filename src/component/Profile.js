import { motion } from 'framer-motion';

function Profile(props) {

    const Content = "I started learning programming when I was 18 years old,at that time I just entered college and of course I took the information technology major, I actually didn't think that I would enter the technology shutter,because my dream was actually to become a doctor, but fate said differently and brought me here,I have no regrets about the path I took because what I've been through is something I enjoy.I started learning the Java programming language when I was in college,over time I started to move to other languages such as Python and JavaScript because I felt comfortable, then after that, i consistently learned the language. until now I use javascript to build the web and python to create machine learning models."

    // created animation like a typewriter using DOM manipulation.
    const writeContent = () => {
        let writeIdx = 0;
        let content = '';
        const writeProfile = document.getElementById('writeProfile');
        const write = setInterval(() => {
            content += Content[writeIdx];
            writeProfile.innerHTML = content;
            writeIdx += 1;
            if (writeIdx >= Content.length) {
                clearInterval(write);
            }
        }, 50);
    }

    return (
        <motion.div className='row'
            id='profile'
            style={{ 'marginTop': 50 }}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.2, type: 'spring', bounce: 0.8 }}>
            <h3 className={props.theme ? 'title' : 'darkTitle'}>Profile</h3>
            <p className='content' id='writeProfile' style={{ 'marginTop': 50 }}>
                {writeContent()}
            </p>
        </motion.div>
    );
};

export default Profile;