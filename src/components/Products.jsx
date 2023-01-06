import React, {useState,useEffect} from 'react'
import Product from './Product'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Money from './Money';
export default function Products(props) {
  const { register, handleSubmit} = useForm();
  const [ currency, setCurrency] = useState("");
  const [fruitData,setFruitData] = useState([]);
  const onSubmit = formData => {
    axios.post("https://ecommerce-v2-red.vercel.app/test",formData)
      .then(response=>{
        setFruitData(response.data);
      })
  };
  function getRequest(str){
    axios.get(`https://ecommerce-v2-red.vercel.app/shop${str}`,{crossdomain: true})
      .then(response=>{
        setFruitData(response.data);
      })
  };
  useEffect(() =>{
    const fetchData = async() =>{
      props.chicken ?  getRequest("high") : getRequest("low");
    };
    fetchData();
  },[props.chicken]);
  const formDisable = props.chicken ? <input type="submit" value="search" disabled/> : <input type="submit" value="search"/>; 
  return (  
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("typeFruit")} >
          <option value="All">Default</option>
          <option value="logia">Logia</option>
          <option value="paramecia">Paramecia</option>
          <option value="zoan">Zoan</option>
        </select>
        <select {...register("sortOrder")}>
          <option value="Featured">Default</option>
          <option value="ASC">Lowest to Highest</option>
          <option value="DESC">Highest to Lowest</option>
        </select>
        {formDisable}
      </form>
      <article className="art1 art">
      { 
        fruitData.map((fruit) =>
          {
            return(
              <Product data={fruit} dog={props.cricket} coin={currency} rat={props.val}/>
            )
          }
        )
      }
      </article>
      <Money coin={setCurrency}/>
    </section>
  )
}
