import React,{useState} from 'react'

export default function Cart(props) {
  
    const cartData= props.data ? props.data.map((fruit) =>
          {
            return(
                <section className="cartThing">
                    <img src={fruit.img}/>
                    <p>{fruit.title} Fruit</p>
                    <p>{fruit.description}</p>
                    <p>USD ${fruit.price}</p>
                </section>
            )
          }
        )
    : <h2>Empty</h2> 
  
  return (
    <div>
        <h2>Items in your Shopping Cart</h2>
        {cartData}
        {/* {props.data.map((fruit) =>
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
        )}      */}
    </div>
  )
}
