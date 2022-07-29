import React from 'react'

export default function Product(props) {
  const fruitData=props.data;
  const alt=`Photo of ${fruitData.title} fruit from One Piece`
  const addCart = () =>{
      props.dog[1](current => [...current,fruitData]);
  }
  const price = parseFloat(fruitData.price) * props.coin
  return (
    <figure className="fruit">
        <p>{fruitData.fruit_type}</p>
        <img src={fruitData.img} alt={alt}/>
        <p>{fruitData.title} Fruit</p>
        <p>{fruitData.description}</p>
        <p>USD ${price ? price : fruitData.price}</p>
        <button onClick={addCart}>Buy</button>
    </figure>
  )
}
