import { useState } from "react";
import logo from "../assets/CityCrossLogoBlue.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrayerRequestForm = () => {
  const [result, setResult] = useState("");
  
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("SUBMITTING....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "59475ece-6e80-4fa3-befc-34da8970f8ed");
    
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
    <div className="container">
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <img className="logo" src={logo} alt="" />
        <h3 className="prayer-form">PRAYER REQUEST FORM</h3>
        <label htmlFor="name">Name:</label>
        <input className="inputs" type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input
          className="inputs"
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="contact">Contact Number:</label>
        <input
          className="inputs"
          type="tel"
          id="contact"
          name="contact"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          className="inputs"
          id="message"
          name="message"
          rows="4"
          cols="50"
          required
          placeholder="Type your prayer request here.."
        ></textarea>

        <button className="button" type="submit">
          {result ? result : "SUBMIT PRAYER REQUEST"}
        </button>
        <br />
        <p className="psalms1">
          Thy Word is a Lamp unto my feet, and a Light unto my path.
        </p>
        <br />
        <em>
          <p className="psalms2">PSALMS 119:105</p>
        </em>
      </form>
    </div>
  );
};

export default PrayerRequestForm;
