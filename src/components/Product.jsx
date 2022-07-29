import React from 'react'

export default function Product(props) {
  const fruitData=props.data;
  const alt=`Photo of ${fruitData.title} fruit from One Piece`
  const addCart = () =>{
      props.dog[1](current => [...current,fruitData]);
      props.rat[1](props.rat[0]+parseFloat(fruitData.price));
  }
  const price = parseFloat(fruitData.price) * props.coin 
  const flatValue= props.coin===0.0000416 ? parseFloat(price).toFixed(4) : price;
  // const currencyStamp= {"0.0000416":"₿","" :"$", :"¥",:"Ð"}
  return (
    <figure className="fruit">
        <p>{fruitData.fruit_type}</p>
        <img src={fruitData.img} alt={alt}/>
        <p>{fruitData.title} Fruit</p>
        <p>{fruitData.description}</p>
        <p>USD ${price ? parseFloat(flatValue).toFixed(4) : fruitData.price}</p>
        <button onClick={addCart}>Add to Cart</button>
    </figure>
  )
}
