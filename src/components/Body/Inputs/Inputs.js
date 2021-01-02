import React from 'react';
import classes from './Inputs.css';

const inputs = (props) =>{

    return(
        <React.Fragment>
            <div className = {classes.Container}>
                {/* <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[0]} placeholder = {props.keys[0]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[1]} placeholder = {props.keys[1]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[2]} placeholder = {props.keys[2]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[3]} placeholder = {props.keys[3]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[4]} placeholder = {props.keys[4]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[5]} placeholder = {props.keys[5]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[6]} placeholder = {props.keys[6]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[7]} placeholder = {props.keys[7]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[8]} placeholder = {props.keys[8]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[9]} placeholder = {props.keys[9]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[10]} placeholder = {props.keys[10]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[11]} placeholder = {props.keys[11]}/></span>
                <span><input onChange = {props.changed} className = {classes.Inputs} type='text' name = {props.keys[12]} placeholder = {props.keys[12]}/></span> */}
                <p onClick = {props.showInfo}>Check the attributes information.</p>
                {/* <div className={classes.subContainer2}>
                    {props.keys.map(feat =>(
                        <label 
                        className = {classes.labels}
                        key = {feat + '1'}>{feat}</label>
                    ))}
                </div> */}
                
                <div className={classes.subContainer1}>
                    {props.keys.map((feat, idx) =>(
                        <div className={classes.inputContainer}  key = {feat +'2'}>
                            <span>{feat}</span>
                            <input 
                                type = 'text'
                                name = {feat}
                                className = {classes.Inputs}
                                placeholder = {feat} 
                                onChange = {props.changed}
                               />
                        </div>
                    ))}
                </div>
            </div>
            

        </React.Fragment>
    );
};

export default inputs;