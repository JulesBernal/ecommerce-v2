import React,{useState} from 'react'
import Purchase from './Purchase';
export default function Cart(props) {
    const [baseball,setBaseBall]=useState();
    // const addCart = () =>{
    //     props.dog[1](current => [...current,fruitData]);
    //     props.rat[1](props.rat[0]+parseFloat(fruitData.price));
    // }
    function removeItem (fruit){
        props.work[0](props.data.filter(item=>item !==fruit))
        props.work[1](props.val - fruit.price);
    }
    const cartData= props.data  ? props.data.map((fruit) =>
          {
            return(
                <section className="cartThing">
                    <img src={fruit.img} alt="fruit"/>
                    <p>{fruit.title} Fruit</p>
                    <p>{fruit.description}</p>
                    <p>USD ${fruit.price}</p>
                    <button onClick={() => {removeItem(fruit)}}>Delete</button>
                </section>
            )
          }
        )
    : <h2>Empty</h2>   ;
   return (
    <div>
        <h2>Items in your Shopping Cart</h2>
        {cartData}
        <h2>Total cost: ${props.val ? props.val : 0}</h2>
        <Purchase kitten={props.data} bike={props.work}/>
    </div>
  )
}
