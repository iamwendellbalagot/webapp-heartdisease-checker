import React, { Component } from 'react';
import Body from '../../components/Body/Body';
import axios from '../../axios';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import classes from './Home.css';
import Backdrop from '../../components/Backdrop/Backdrop';
import Modal from '../../components/Modal/Modal';
import Result from '../../components/Modal/Result/Result';

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
        submit: false
    }

    KEYS = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal"];

    componentDidUpdate(){
    }
    componentDidMount(){
        console.log('DID MOUNT')
    }

    // checkParams = () =>{
    //     for (let feat in this.state.params) {
    //         if (this.state.params[feat] === null) {
                
    //             break;
    //         }
    //     }
    // }

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
            submit:true
        }));
        axios.post('/testapi', this.state.params)
             .then(res =>{
                console.log(res.data.probability)
                this.setState(prevState =>({
                    prob: res.data.probability
                }));

                if (res.data.prediction === 'No'){
                    console.log("You Don't Have Heart Disease.")
                    this.setState(prevState =>({
                        prediction: "You don't have a heart disease."
                    }))

                }
                else{
                    console.log('You Have a Heart Disease.')
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
            submit:false
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

                    <Modal show = {this.state.submit}>
                        <Result 
                        probability = {this.state.prob}
                        prediction = {this.state.prediction}/>
                    </Modal>

                    <Navigation />
                    <Body 
                    changed = {this.formsHandler} 
                    keys = {this.KEYS}
                    clicked = {this.submissionHandler} 
                    prediction = {this.state.prediction}
                    disabled = {res}/>
                    <Footer />
                </div>
            </React.Fragment>
            
        )
    }
}

export default Home;