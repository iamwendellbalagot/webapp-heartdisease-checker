import React, {Component} from 'react';
import AboutContent from './AboutContent/AboutContent';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

class About extends Component {

    render(){
        return(
            <React.Fragment>
                <Navigation />
                <AboutContent />
                <Footer />
            </React.Fragment>
        );
    }

}

export default About;