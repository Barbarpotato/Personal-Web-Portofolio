import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

import imgPython from '../others/Python.png';
import imgTensor from '../others/Tensorflow.png';
import imgMongoose from '../others/Mongoose.png';
import imgMysql from '../others/Mysql.png';
import imgExpress from '../others/Express.png';
import imgReact from '../others/React.png';

function Hardskill(props) {
    return (
        <motion.div
            id='hardskill'
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.2, type: 'spring', bounce: 0.8 }}
            className='row'>
            <h3 className={props.theme ? 'title' : 'darkTitle'} style={{ 'marginTop': 50 }}>Hard Skill</h3    >
            <p className='content' style={{ 'marginTop': 50 }}>
                So far, I'm interested in Machine Learning especially for the Natural Language Processing Using Python programming language.
                I'm focusing in FrontEnd Web Development using the tool like JS React for building UI Components and the BackEnd using the node.js.
                im also focus building web application using the MERN Stack (Mysql|Mongodb, Express, React, Node.js).
            </p>

            <Carousel>

                <Carousel.Item interval={950}>
                    <img
                        style={{ 'opacity': 0.5 }}
                        className='d-block w-100'
                        src={imgPython}
                        alt="Python"
                    />
                    <Carousel.Caption>
                        <h3
                            style={{ 'color': 'white', 'opacity': 0.8 }}>
                            Python
                        </h3>
                        <p
                            style={{ 'color': 'white', 'opacity': 0.7 }}>
                            Daily Health Report Project was the one of my project that i made when i'm learning this Python programming language.
                            this project can create the pdf file that check the health of the computer then sent the pdf file via email.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        style={{ 'opacity': 0.5 }}
                        className='d-block w-100'
                        src={imgTensor}
                        alt="Tensorflow"
                    />
                    <Carousel.Caption>
                        <h3
                            style={{ 'color': 'white', 'opacity': 0.8 }}>
                            Tensorflow
                        </h3>
                        <p
                            style={{ 'color': 'white', 'opacity': 0.7 }}>
                            Sentiment Analysis Project was the one of my machine learning project during my Capstone in Bangkit Academy.
                            Dealing with users review about event organizers services that we created during the capstone is that a positive sentiment or bad sentiment.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        style={{ 'opacity': 0.5 }}
                        className='d-block w-100'
                        src={imgMongoose}
                        alt="Mongoose"
                    />
                    <Carousel.Caption>
                        <h3
                            style={{ 'color': 'white', 'opacity': 0.8 }}>
                            Mongoose
                        </h3>
                        <p
                            style={{ 'color': 'white', 'opacity': 0.7 }}>
                            Mongoose was the part of the MongoDb. Mongoose is external modules that helps us create a connection
                            between Node.Js and MongoDb. One of my project from Mongoose, is to create the ODM (Object Data Modelling)
                            of users account and the users comment from some product.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        style={{ 'opacity': 0.5 }}
                        className='d-block w-100'
                        src={imgMysql}
                        alt="My Sql"
                    />
                    <Carousel.Caption>
                        <h3
                            style={{ 'color': 'white', 'opacity': 0.8 }}>
                            Mysql
                        </h3>
                        <p
                            style={{ 'color': 'white', 'opacity': 0.7 }}>
                            I am using the Mysql when im integrating it with my Express application during
                            my <a href='https://g.co/kgs/r3DXdL'>NIIT</a> courses. Querying and Manipualte data in Node.js, even i dont have some personal project about Mysql,
                            but im learning so much basic concept in <a href='https://g.co/kgs/r3DXdL'>NIIT</a>.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        style={{ 'opacity': 0.5 }}
                        className='d-block w-100'
                        src={imgExpress}
                        alt="imgExpress"
                    />
                    <Carousel.Caption>
                        <h3
                            style={{ 'color': 'white', 'opacity': 0.8 }}>
                            Express
                        </h3>
                        <p
                            style={{ 'color': 'white', 'opacity': 0.7 }}>
                            This is the external module that im used to created RESTful API project.
                            so far im usually created MVC(Model, View, Controller) pattern application project.
                            For now I'm still looking for and learning about microservices pattern.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        style={{ 'opacity': 0.5 }}
                        className='d-block w-100'
                        src={imgReact}
                        alt="React"
                    />
                    <Carousel.Caption>
                        <h3
                            style={{ 'color': 'white', 'opacity': 0.8 }}>
                            React
                        </h3>
                        <p
                            style={{ 'color': 'white', 'opacity': 0.7 }}>
                            This is the Front-End framework that im always used to represent client side on my web application.
                            Not all front end projects use React framework, sometimes we only use pure html, css and Javascript if it's not too complex.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </motion.div >
    );
};

export default Hardskill;