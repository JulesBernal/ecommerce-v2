import React from 'react'

import { useForm } from 'react-hook-form';
export default function Money(props) {

const { register, handleSubmit} = useForm();

  const onSubmit = formData => {
    // console.log(parseFloat(formData.denom));
    // props.coin(parseFloat(formData.denom));
    props.coin((formData.denom))
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
       <select {...register("denom")}  >
          <option value="$">USD</option>
          <option value="¥">YEN</option>
          <option value="₿">BTC</option>
          <option value="Ð">DOGE</option>
        </select>
      </form>
    </div>
  )
}
