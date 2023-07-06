/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
  return (
    <footer>
      <div className="text">
        <h3>&copy;Copyright khanh_tung 2021</h3>
        <p>Contact me:</p>
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009958477102"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/minh_anh30" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="mailto: tinproht123@gmail.com" target="_blank">
              <i className="fab fa-google"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tinproht123/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
