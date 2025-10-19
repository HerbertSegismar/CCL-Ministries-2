import logo from '../assets/CityCrossLogoBlue.svg'

const About = () => {
  return (
    <div class="container2">
      <form action="https://api.web3forms.com/submit" method="POST">
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
        <button class="button" type="submit">
          SUBMIT
        </button>{" "}
        <br /> <br /> <br />
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
}

export default About