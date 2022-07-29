import React from 'react'

import { useForm } from 'react-hook-form';
export default function Money(props) {

const { register, handleSubmit} = useForm();
  // const toggler = () =>{
  //   props.data[0] ? props.data[1](false): props.data[1](true);
  // }
  const onSubmit = formData => {
    console.log(formData);
    props.coin(parseFloat(formData.denom));
  };
  return (
    <div>
       <select {...register("denom")} onChange={handleSubmit(onSubmit)} >
          <option value="1">USD</option>
          <option value="134">YEN</option>
          <option value="0.0000416">BTC</option>
          <option value="14">DOGE</option>
        </select>
    </div>
  )
}
