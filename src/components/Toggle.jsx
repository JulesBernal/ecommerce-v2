import React from 'react'

import Switch from '@mui/material/Switch';

export default function Toggle(props) {
    const toggler = () =>{
      props.data[0] ? props.data[1](false): props.data[1](true);
    }
  return (
    <div>
      <Switch 
        value={props.data[0] ? 'a' : 'disabled'}
        checked={props.data[0]}
        onChange={toggler}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  )
}
