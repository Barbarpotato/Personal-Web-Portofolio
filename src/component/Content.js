import '../styles/Content.css';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Quotes from './Quotes';
import Profile from './Profile';
import Journey from './Journey';
import Softskill from './Softskill';
import Hardskill from './Hardskill';
import Footer from './Footer';

function Content(props) {

    return (
        <div className={props.theme ? 'container Main' : 'container darkMain'}>
            <Navigation theme={props.theme}></Navigation>
            <Introduction theme={props.theme}></Introduction>
            <Quotes></Quotes>
            <Profile theme={props.theme}></Profile>
            <Journey theme={props.theme}></Journey>
            <Softskill theme={props.theme}></Softskill>
            <Hardskill theme={props.theme}></Hardskill>
            <Footer theme={props.theme}></Footer>
        </div >
    );
};

export default Content;