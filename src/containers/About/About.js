import React, {Component} from 'react';
import AboutContent from './AboutContent/AboutContent';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Nothingness from '../../components/Nothingness/Nothingness';
import classes from './About.css';

class About extends Component {

    render(){
        return(
            <React.Fragment>
                <Navigation />
                <AboutContent />
                <div className={classes.notice}>
                    <Nothingness />
                </div>  
                <Footer />
            </React.Fragment>
        );
    }

}

export default About;