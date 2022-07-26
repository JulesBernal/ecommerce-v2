import React from 'react'

export default function Product(props) {
  const fruitData=props.data;
  const alt=`Photo of ${fruitData.title} fruit from One Piece`
  // if()
  return (
    <figure className="fruit">
        <p>{fruitData.fruit_type}</p>
        {/* <img src="./fruits/barafruit.webp" alt={alt}/> */}
        <img src={fruitData.img} alt={alt}/>
        <p>{fruitData.title} Fruit</p>
        <p>{fruitData.description}</p>
        <p>USD ${fruitData.price}</p>
    </figure>
    // <figure class="fruit">
    //     <img src="../public/fruits/barafruit.webp" alt="Photo of Bara fruit from One Piece"/>
    //     <p>Bara Bara Fruit</p>
    //     <p>The chewy "chop" fruit.</p>
    //     <p>$15,000,000</p>
    //     <p>USD $15.00</p>
    // </figure>
  )
}
