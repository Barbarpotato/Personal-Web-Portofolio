import { Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Journey(props) {
    return (
        <motion.div className='row'
            id='journey'
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.2, type: 'spring', bounce: 0.8 }}
        >
            <h3 className={props.theme ? 'title' : 'darkTitle'} style={{ 'marginTop': 50 }}>Journey</h3>
            <Accordion defaultActiveKey="0" style={{ 'marginTop': 50 }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Front End Development</Accordion.Header>
                    <Accordion.Body>
                        In the front end side development, i have already build the bussiness web application
                        using the React Framework. Im using the React Router to navigate the specific url in the application,
                        implement Redux for state management that going to display in the clients, using some animation like
                        react transition grup, implement loading animation when the action type is loading in the redux,
                        using props to pass the state from the parent to the child component, etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Back End Development</Accordion.Header>
                    <Accordion.Body>
                        In the back end side development, I have implemented Representational State Transfer
                        architecture to be used for creating a web services. Creating the endpoints so the front side can access the resources.
                        understanding the http method that often be used like PUT, GET, POST, DELETE, OPTIONS.
                        and finally, implement the SQL and NOSQL databases. I am focusing on MYSQL RDBMS for SQL, and MONGODB RDBMS for NOSQL.
                        with these concept i could create MVC(Model-View-Controller) Software architecture pattern. I also learned the microservices
                        to build some complicated software that has many services.
                    </Accordion.Body>
                </Accordion.Item><Accordion.Item eventKey="2">
                    <Accordion.Header>Machine Learning</Accordion.Header>
                    <Accordion.Body>
                        In the machine learning worlds, i have already build the model that can predict the text
                        is that a good sentiment or a bad sentiment using the Deep Learning architecture.
                        I created this projects once I am the Bangkit Cohort Academy. to make this model,First Im implemented
                        data pre-processing such as remove stopword, lowercasing, punctuations,etc. than i created the word embedding
                        using the tokenizer from tensorflow module, then creating the deep learning model architecture
                        after that we can training the model and testing the model it is good or not.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </motion.div>
    );
};

export default Journey;