import React from 'react'
import logo from '../assets/CityCrossLogoBlue.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CCLAfternoonService3 = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("SENDING....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a7840cc7-949f-4b84-8a87-7f5131703f74");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Registration Details Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };


  return (
    <div class="container4">
        <ToastContainer/>
        <form onSubmit={onSubmit}>
            <img class="logo" src={logo} alt="" />
            <h4>WELCOMES YOU TO OUR AFTERNOON SERVICE<br /> <em class='first'>1st</em> <br />YEAR ANNIVERSARY</h4>
            <h3>PLEASE REGISTER YOUR DETAILS BELOW:</h3><br />
            <label for="name">Name:</label>
            <input class="inputs" type="text" id="name" name="name" required/>

            <label for="contact">Contact Number:</label>
            <input class="inputs" type="tel" id="contact" name="contact"/>
            
            <label for="email">Email:</label>
            <input class="inputs" type="email" id="email" name="email"/> <br /> <br />

            <button class="button2 "type="submit">{result ? result: "SUBMIT FORM"}</button> <br /> <br /> <br />
            <p class='psalms1'>Thy Word is a Lamp unto my feet, and a Light unto my path.</p><br/><em><p class="psalms2">PSALMS 119:105</p></em>
        </form>
    </div>
  )
}

export default CCLAfternoonService3