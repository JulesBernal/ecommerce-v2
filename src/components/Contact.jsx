import React from 'react'

import { useForm } from 'react-hook-form';
export default function Contact(props) {

  const { register, handleSubmit} = useForm();
  const onSubmit = formData => {
    console.log(formData);
    formData.organization==='blackbeard pirates' || formData.organization === 'marines' || 
    formData.organization === 'marine' ? alert('Not Welcome') : alert(`Correspondence Sent ${formData.fName}`);
  };
  const formContact = props.sheep ? 
  <img id="redShip" src="./ships/donShip.webp" alt="Donquixote Main Ship from One Piece on a dock."/> :  
  <img id="redShip" src="./ships/redForce.jpeg" alt="Red Force Ship from One Piece on a dock."/>; 
  return (
    <article id="contactContact">
        <section id ="contactFlex" >
        {formContact}
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)} method="POST" >
        
          <label htmlFor="">First Name</label>
          <input type="text" {...register("fName")} placeholder='Your first name...' Required/>
          <label htmlFor="">Last Name</label>
          <input type="text" {...register("lName")} placeholder='Your last name...'/>
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} placeholder='Your email...' Required />
          <label htmlFor="">Organization/Affiliation</label>
          <input type="text" {...register("organization")} placeholder='Your Organization here...'/>
          <label htmlFor="">Comment</label>
          <textarea name="" id="" {...register("comment")} placeholder="Write your comments and questions..." Required></textarea>
          <button type='Submit'>Submit</button>
        </form>
        </section>
    </article>
  )
}
