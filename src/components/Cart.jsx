import React,{useState} from 'react'

export default function Cart(props) {
    const [total, setTotal] = useState("0");
    const cartData= props.data ? props.data.map((fruit) =>
          {
            return(
                <section className="cartThing">
                    <img src={fruit.img} alt="fruit"/>
                    <p>{fruit.title} Fruit</p>
                    <p>{fruit.description}</p>
                    <p>USD ${fruit.price}</p>
                </section>
            )
          }
        )
    : <h2>Empty</h2>   ;
    
    // const something  = props.data ? props.data.map((fruit) => { setTotal(total + parseFloat(fruit.price))}) : '0';
    //       console.log(something);
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
        <h2>Total cost: ${total}</h2>

        {/* <h2>Total cost: ${totalCost}</h2> */}
    </div>
  )
}
