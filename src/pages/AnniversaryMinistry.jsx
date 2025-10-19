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

    // Get form values properly
    const name = formData.get("name");
    const contact = formData.get("contact");
    const email = formData.get("email");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/4de0fccfbf2809f17e5c0bc597596d4b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            // Regular fields that will appear in the table
            name: name,
            contact: contact,
            email: email,

            // FormSubmit specific parameters
            _replyto: email,
            _template: "table",
            _subject: `Anniversary Registration Received: ${name}`,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Registration Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message || "Submission failed. Please try again.");
        setResult("");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An error occurred. Please try again.");
      setResult("");
    }
  };

  return (
    <div className="container2">
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
