import * as React from "react";
import "../sass/main.css";
import logo from "../assets/logo/milan_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer class="footer">
      <picture class="footer__logo-box">
        <img src={logo} alt="full logo" class="footer__logo" />
      </picture>
      <div class="footer__navigation">
        <div className="footer__contact">
          <p className="paragraph">
            <h3 className="heading-teritiary">located at</h3>
            Location : <br></br>Indian Institute of technology Hyderabad
            <br></br> Near NH-65, Sangareddy, kandi,<br></br>Telangana 502285
          </p>
        </div>

        <div>
          <p className="paragraph footer__email">
            <h3 className="heading-teritiary">contact us</h3>
            Phone: <br></br>(+91) 9946525172 <br></br>Email us at:<br></br>{" "}
            milan.oc@gymkhana.iith.ac.in
          </p>
        </div>

        <div className="footer__socials">
          <h3 className="heading-teritiary">follow us</h3>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href=""
            style={{
              marginLeft: "1.5rem",
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
