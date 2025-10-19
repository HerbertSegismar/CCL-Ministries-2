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

    formData.append("access_key", "59475ece-6e80-4fa3-befc-34da8970f8ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Registration Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div class="container2">
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <img class="logo" src={logo} alt="" />
        <h4>
          WELCOMES YOU TO OUR <br /> <em class="seventh">8th</em> YEAR
          ANNIVERSARY
        </h4>
        <h3>PLEASE REGISTER YOUR DETAILS BELOW:</h3>
        <br />
        <input
          type="hidden"
          name="access_key"
          value="97f78806-b2fb-454d-81a6-7561207e9d60"
        />
        <label for="name">Name:</label>
        <input class="inputs" type="text" id="name" name="name" required />
        <label for="contact">Contact Number:</label>
        <input class="inputs" type="tel" id="contact" name="contact" />
        <label for="email">Email:</label>
        <input
          class="inputs"
          type="email"
          id="email"
          name="email"
        /> <br /> <br />
        <button class="button " type="submit">
          {result ? result : "SUBMIT"}
        </button>
        <br />
        <p class="psalms1">
          Thy Word is a Lamp unto my feet, and a Light unto my path.
        </p>
        <br />
        <em>
          <p class="psalms2">PSALMS 119:105</p>
        </em>
      </form>
    </div>
  );
};

export default Anniversary;
