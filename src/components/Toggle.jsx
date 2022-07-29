import React, {useState} from 'react'

import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Toggle(props) {
    // const [toggled,setToggled] = useState("");
    const [checked, setChecked] = React.useState(true);
  // console.log(props.data[1])
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setChecked(event.target.checked);
    // };
    // const toggler = () =>{
    //   toggled ? setToggled(false): setToggled(true);
    // }
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
      {/* <Switch 
        value={toggled ? 'a' : 'disabled'}
        checked={toggled}
        onChange={toggler}
        inputProps={{ 'aria-label': 'controlled' }}
      /> */}
      {/* <Switch {...label} /> */}
    </div>
  )
}
