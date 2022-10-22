import { ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Softskill(props) {
    return (
        <motion.div
            id='softskill'
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.2, type: 'spring', bounce: 0.8 }}
            className='row'>
            <h3 className={props.theme ? 'title' : 'darkTitle'} style={{ 'marginTop': 50 }}>Soft Skill</h3    >
            <p className='content' style={{ 'marginTop': 50 }}>
                Working as a team was my favorite one. My greatest strength is communicate with others
                to tackle some problems and i love to be a part of the team project.
            </p>

            <p>Communication:</p>
            <ProgressBar animated variant='success' now={87} label={'92%'}></ProgressBar>

            <br></br>
            <br></br>

            <p>Team Working:</p>
            <ProgressBar animated variant='success' now={90} label={'90%'}></ProgressBar>

            <br></br>
            <br></br>
            <p>Creativity:</p>
            <ProgressBar animated variant='warning' now={79} label={'79%'}></ProgressBar>
            <br></br>
            <br></br>
            <p>Coding:</p>
            <ProgressBar animated variant='warning' now={77} label={'77%'}></ProgressBar>
            <br></br>
            <br></br>
            <p>Problem Solving:</p>
            <ProgressBar animated variant='warning' now={72} label={'72%'}></ProgressBar>
        </motion.div>
    );
};

export default Softskill;