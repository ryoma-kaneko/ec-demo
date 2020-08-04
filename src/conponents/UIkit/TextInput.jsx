import React from 'react';
import TextField from '@material-ui/core/TextField';
import { getThemeProps } from '@material-ui/styles';

const TextInput = (prps) => {
    return (
        <TextField 
            fullWidth= {props.fullWidth}
            label= {props.label}
            margin= "dense"
            multiline= {props.multiline}
            required= {prps.required}
            rows= {props.rows}
            value= {props.value}
            type= {props.type}
            onChange= {props.onChange}
        />
    )
}

export default TextInput