import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(./img/footer.png)" }}
    >
      <div className="socials">
        <a href="https://www.facebook.com/" target="blank">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/mate_bellini/" target="blank">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="./img/Logo.png" alt="org" />
      <strong>Desarrollado por Mateo Bellini</strong>
    </footer>
  );
};

export default Footer;
