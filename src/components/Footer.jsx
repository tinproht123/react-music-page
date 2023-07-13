/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="text">
        <h3>&copy;Copyright khanh_tung 2021</h3>
        <p>Contact me:</p>
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009958477102"
              target="_blank"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/minh_anh30" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="mailto: tinproht123@gmail.com" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-google" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tinproht123/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
