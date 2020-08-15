import React, { Component } from 'react';
import Body from '../../components/Body/Body';
import axios from 'axios';

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

        prediction:null
    }

    KEYS = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal"];

    componentDidUpdate(){
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
        axios.post('http://127.0.0.1:5000/testapi', this.state.params)
             .then(res =>{
                if (res.data.prediction === 'No'){
                    console.log("You Don't Have Heart Disease.")
                    this.setState(prevState =>({
                        prediction: "You Don't Have Heart Disease."
                    }))

                }
                else{
                    console.log('You Have a Heart Disease.')
                    this.setState(prevState => ({
                        prediction: "You Have Heart Disease."
                    }))
                }
                })
                .catch(err => {
                console.log(err)
            })
    }



    render(){
        return (
            <React.Fragment>
                <h1>Heart Disease Checker</h1>
                <Body 
                changed = {this.formsHandler} 
                keys = {this.KEYS}
                clicked = {this.submissionHandler} 
                prediction = {this.state.prediction}/>
            </React.Fragment>
            
        )
    }
}

export default Home;