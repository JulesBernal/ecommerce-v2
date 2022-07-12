import React from 'react'

export default function Contact() {
  return (
    <form action="">
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='Your first name...' />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Your email here' Required />
        <label htmlFor="">Organization/Affiliation</label>
        <input type="text" />
        <label htmlFor="">Comment</label>
        <textarea name="" id="" cols="30" rows="10" Required></textarea>
    </form>
  )
}
