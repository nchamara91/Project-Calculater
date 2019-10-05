import React from 'react';
import Button from '@material-ui/core/Button';

function CalculaterBody(props){

    const elemt = null;
    for (let index = 0; index < props.props; index++) {
       
        elemt = <Button variant="contained" color="white">1</Button>
            
    }
    
    return(
        elemt
    )
}

export default CalculaterBody;