import React from 'react'
import Products from './Products'

export default function Shop(props) {
  return (
    <div>Shop
      <Products key={props.sheep ? "1" : "2"} chicken={props.sheep} cricket={props.cat} val={props.horse}/>
    </div>
  )
}
