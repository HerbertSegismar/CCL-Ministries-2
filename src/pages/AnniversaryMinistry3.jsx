import { useState } from "react";
import logo from "../assets/CityCrossLogoBlue.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Anniversary = () => {
  const [result, setResult] = useState("");
  
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("SUBMITTING....");
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
    <div className="container4">
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <img className="logo" src={logo} alt="" />
        <h4>
          WELCOMES YOU TO OUR <br /> <em className="seventh">8th</em> YEAR
          ANNIVERSARY
        </h4>
        <h3>PLEASE REGISTER YOUR DETAILS BELOW:</h3>
        <br />
        <label htmlFor="name">Name:</label>
        <input className="inputs" type="text" id="name" name="name" required />
        <label htmlFor="contact">Contact Number:</label>
        <input
          className="inputs"
          type="tel"
          id="contact"
          name="contact"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          className="inputs"
          type="email"
          id="email"
          name="email"
          required
        />{" "}
        <br /> <br />
        <button className="button" type="submit">
          {result ? result : "SUBMIT"}
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

export default Anniversary;
