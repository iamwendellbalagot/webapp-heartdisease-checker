import React, { Component } from 'react';
import Body from '../../components/Body/Body';
import axios from '../../axios';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import classes from './Home.css';
import Backdrop from '../../components/Backdrop/Backdrop';
import Modal from '../../components/Modal/Modal';
import Result from '../../components/Modal/Result/Result';
import AttributesInfo from '../../components/AttributesInfo/AttributesInfo';

class Home extends Component {

    state = {
        params:{
        age: null,
        sex: null, 
        cp: null, 
        trestbps: null,
        chol: null,   
        fbs: null, 
        restecg: null, 
        thalach: null,
        exang: null, 
        oldpeak: null, 
        slope: null,
        ca: null, 
        thal: null},

        prediction:null,
        prob:null,
        submit: false,
        showSpinner:false,
        showAttributes: false
    }

    KEYS = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal"];

    componentDidUpdate(){
    }
    componentDidMount(){
        console.log('[DID MOUNT] components')
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.props.location.pathname === nextProps.location.pathname) {
            return true
        }
        else{           
             return false;
        }
    }

    formsHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        // this.setState({[name]: val});
        this.setState(prevState => ({
            params: { // object that we want to update
                ...prevState.params, // keep all other key-value pairs
                [name]: val // update the value of specific key
            }
        }))
    }   


    submissionHandler = (event) =>{
        event.preventDefault();
        this.setState(prevState =>({
            submit:true,
            showSpinner:true
        }));
        axios.post('/testapi', this.state.params)
             .then(res =>{
                setTimeout(() =>{
                    this.setState(prevState => ({
                        prob: res.data.probability,
                        showSpinner: false
                    }));
                }, 1000)

                if (res.data.prediction === 'No'){
                    this.setState(prevState =>({
                        prediction: "You don't have a heart disease."
                    }))

                }
                else{
                    this.setState(prevState => ({
                        prediction: "You have a heart disease."
                    }))
                }
                })
                .catch(err => {
                console.log(err)
            })
    }

    backdropHandler = () =>{
        this.setState(prevState =>({
            submit:false,
            showAttributes:false
        }))
    }

    attributesHandler = () =>{
        this.setState(prevState =>({
            showAttributes:true
        }))
    }


    render(){
        let res = Object.values(this.state.params).every(o => o);

        return (
            <React.Fragment>
                <div className = {classes.Container}>
                    <Backdrop 
                    show = {this.state.submit}
                    clicked = {this.backdropHandler}/>
                    <Backdrop 
                    show = {this.state.showAttributes}
                    clicked = {this.backdropHandler}
                    />

                    <Modal show = {this.state.submit}>
                        <Result 
                        probability = {this.state.prob}
                        prediction = {this.state.prediction}
                        showSpinner = {this.state.showSpinner}/>
                    </Modal>

                    <Navigation />
                    <Body 
                    changed = {this.formsHandler} 
                    keys = {this.KEYS}
                    clicked = {this.submissionHandler} 
                    disabled = {res}
                    showAttributes = {this.attributesHandler}/>

                    {this.state.showAttributes?<AttributesInfo show = {this.state.showAttributes}/> : null}    
                    <Footer />
                </div>
            </React.Fragment>
            
        )
    }
}

export default Home;