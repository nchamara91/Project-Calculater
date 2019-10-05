import React from 'react';
import Button from '@material-ui/core/Button';

function keyRow(props){
    return (
      <div>       
        <Button variant="contained" color="white">
        {props.numberOfKeys}
        </Button>
      </div>
    )
}

export default keyRow;