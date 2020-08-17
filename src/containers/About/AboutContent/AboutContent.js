import React from 'react';
import classes from './AboutContent.css';
import csr from '../../../assets/csr.png';
import ss from  '../../../assets/ss.png';
import roc from '../../../assets/roc.png';

const aboutContent = (props) =>{
    return(
        <div className = {classes.Container}>
            <div className = {classes.AboutContent}>
                <h3 >{"SENSITIVITY & SPECIFICITY"}</h3>
                <p>Diagnostic tests are often sold, marketed, cited and used with sensitivity and specificity as the headline metrics. Sensitivity and specificity are defined as:</p>
                <img className = {classes.csr} src={ss} alt='ss' />
                <h4 style ={{textDecoration:'underline'}}>Test Results</h4>
                <p> Sensitivity: 0.9032258064516129</p>
                <p>Specificity: 0.7666666666666667</p>
                
                <h3>MODEL RECIEVER OPERATOR CURVE</h3>
                <p>This is a convenient way to capture the performance of a model in a single number, although it's not without certain issues.</p>
                <img className = {classes.roc} src={roc} alt='roc' />
                <p> As a rule of thumb, an AUC can be classed as follows:</p>
                <ul>
                    <li>0.90 - 1.00 = excellent</li>
                    <li>0.80 - 0.90 = good</li>
                    <li>0.70 - 0.80 = fair</li>
                    <li>0.60 - 0.70 = poor</li>
                    <li>0.50 - 0.60 = fail</li>
                </ul>

                <h4 style ={{textDecoration:'underline'}}>Test Results</h4>
                <p>AUC: 0.9131868131</p>

                <h3>MODEL CLASSIFICATION REPORT</h3>
                <p>The classification report shows a representation of the main classification metrics on a per-class basis. This gives a deeper intuition of the classifier behavior over global accuracy which can mask functional weaknesses in one class of a multiclass problem.</p>
                <img className = {classes.csr} src={csr} alt='csr' />
            </div>
        </div>
    );
}

export default aboutContent;