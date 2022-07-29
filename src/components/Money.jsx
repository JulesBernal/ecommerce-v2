import React from 'react'

import { useForm } from 'react-hook-form';
export default function Money(props) {

const { register, handleSubmit} = useForm();

  const onSubmit = formData => {
    console.log(parseFloat(formData.denom));
    props.coin(parseFloat(formData.denom));
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
       <select {...register("denom")}  >
          <option value="1">USD</option>
          <option value="134">YEN</option>
          <option value="0.0000416">BTC</option>
          <option value="14">DOGE</option>
        </select>
      </form>
    </div>
  )
}
