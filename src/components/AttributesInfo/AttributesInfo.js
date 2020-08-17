import React from 'react';
import Modal from '../Modal/Modal';
import classes from './AttributesInfo.css';

const attributesInfo = (props) =>{
    return (
        <React.Fragment>
            <Modal show = {props.show}>
                <div className = {classes.AttributesInfo}>
                <h3>Attributes Information.</h3>
                    <ul>
                        <li>age</li>
                        <li>sex (input 1 if male otherwise 0)</li>
                        <li>cp : Chest pain type (4 values)</li>
                        <li>trestbps : Resting blood pressure</li>
                        <li>chol : Serum cholestoral in mg/dl</li>
                        <li>fbs : Fasting blood sugar {'>'} 120 mg/dl</li>
                        <li>restecg : Resting electrocardiographic results (values 0,1,2)</li>
                        <li>thalach : Maximum heart rate achieved</li>
                        <li>exang : Exercise induced angina</li>
                        <li>oldpeak : ST depression induced by exercise relative to rest</li>
                        <li>slope : The slope of the peak exercise ST segment</li>
                        <li>ca : Number of major vessels (0-3) colored by flourosopy</li>
                        <li>thal: 3 = normal; 6 = fixed defect; 7 = reversable defect</li>
                    </ul>
                    <a target = {'_blank'} href = {'https://archive.ics.uci.edu/ml/datasets/Heart+Disease'}>Click here to view more information.</a>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default attributesInfo;