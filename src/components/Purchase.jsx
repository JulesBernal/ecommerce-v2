import React from 'react'

export default function Purchase(props) {
    const onSubmit = order => {
        // axios.post("https://onepieceecommercebackend.herokuapp.com/buy",formData)
        //   .then(response=>{
        //     setFruitData(response.data);
        //   })
        props.bike[0]('');
        props.bike[1]('');
        alert('Purchase successful!')
      };
  return (
    <div>
        {/* <form> */}
            <button onClick={() => {onSubmit(props.kitten)}}>Purchase</button>
        {/* </form> */}
    </div>
  )
}
