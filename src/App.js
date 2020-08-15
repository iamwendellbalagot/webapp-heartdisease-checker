import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from './containers/Home/Home'


class App extends Component {

  // componentDidMount(){

  //   let inp = { age: 65,
  //           sex: 1, 
  //           cp: 0, 
  //           trestbps: 110,
  //           chol:248,   
  //           fbs: 0, 
  //           restecg: 0, 
  //           thalach: 158,
  //           exang: 0, 
  //           oldpeak: 0.6, 
  //           slope: 2,
  //           ca:2, 
  //           thal: 1, 
  //         }

  //   console.log('wendell')
  //   axios.post('http://127.0.0.1:5000/testapi', inp)
  //        .then(res =>{
  //           if (res.data.prediction === 'No'){
  //             console.log("You Don't Have Heart Disease.")
  //           }
  //        })
  //        .catch(err => {
  //          console.log(err)
  //        })
  // }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
