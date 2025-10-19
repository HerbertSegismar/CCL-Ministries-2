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

    // Get form values properly
    const name = formData.get("name");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const message = formData.get("message");

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
            email: email,
            contact: contact,
            message: message,

            // FormSubmit specific parameters
            _replyto: email,
            _template: "table",
            _subject: `Prayer Request Received: ${name}`,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Prayer Request Submitted Successfully");
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
