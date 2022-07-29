import React,{useState} from 'react'

export default function Cart(props) {
   
  return (
    <div>
        <h2>Items in your Shopping Cart</h2>
        {props.data[0].map((fruit) =>
          {
            return(
                <section id="cartThing">
                    <img src={fruit.img}/>
                    <p>{fruit.title} Fruit</p>
                    <p>{fruit.description}</p>
                    <p>USD ${fruit.price}</p>
                </section>
            )
          }
        )}
    </div>
  )
}
