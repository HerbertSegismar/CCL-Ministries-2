import React from 'react'
import logo from '../assets/CityCrossLogoBlue.svg'

const Home = () => {
  return (
    <div class="container">
      <form action="https://api.web3forms.com/submit" method="POST">
        <img class="logo" src={logo} alt="" />
        <h3 className='prayer-form'>PRAYER REQUEST FORM</h3>
        <input type="hidden" name="access_key" value="59475ece-6e80-4fa3-befc-34da8970f8ed"/>
        <label for="name">Name:</label>
        <input class="inputs" type="text" id="name" name="name" required/>

        <label for="email">Email:</label>
        <input class="inputs" type="email" id="email" name="email" required/>

        <label for="contact">Contact Number:</label>
        <input class="inputs" type="tel" id="contact" name="contact" required/>

        <label for="message">Message:</label>
        <textarea class="inputs" id="message" name="message" rows="4" cols="50" required placeholder="Type your prayer request here.."></textarea>

        <button class="button "type="submit">SUBMIT</button><br />
      </form>
    </div>
  )
}

export default Home