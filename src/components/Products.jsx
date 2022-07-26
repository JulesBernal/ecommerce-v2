import React, {useState,useEffect} from 'react'
import Product from './Product'
import axios from 'axios'
import { useForm } from 'react-hook-form';
export default function Products() {
  
  const { register, handleSubmit} = useForm();
  const [fruitData,setFruitData] = useState([]);
  // const [inputValue,setInputValue]= useState("");

  const onSubmit = formData => {
      console.log(formData);
    axios.post("http://localhost:3000/test",formData)
      .then(response=>{
        console.log(response.data);
        setFruitData(response.data);
      })
  };
  function getRequest(){
    axios.get("http://localhost:3000/shoplow",{crossdomain: true})
      .then(response=>{
        setFruitData(response.data);
      })
  };
  useEffect(() =>{
    const fetchData = async() =>{
      const result = getRequest();
      // setFruitData(result.data);
      // console.log(result);
    };
    fetchData();
  },[]);
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
        <input type="submit"/>
      </form>
      <article className="art1 art">
      {
        fruitData.map((fruit) =>
          {
            return(
              <Product data={fruit}/>
            )
          }
        )
        
      }
      </article>
    </section>
  )
}
