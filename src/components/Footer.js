const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="footer_item"
        href="https://www.instagram.com/skalacosmeticos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="footer_title">Instagram</h4>
        <i className="footer_logo fab fa-instagram"></i>
      </a>
      <div className="footer_item">
        <h4 className="footer_title">Atención al Cliente</h4>
        <p className="footer_text">
          De lunes a viernes desde las 8:00 hasta las 17:30 hs
          (Excepto feriados)
        </p>
        <div className="footer_logo_container">
          <a href="tel:+0800 1234 5678">
            <i className="fas fa-phone" />
          </a>
          <a href="mailto: mail.inventado@no.existe.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <a
        className="footer_item"
        href="https://www.facebook.com/skalacosmeticos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="footer_title">Facebook</h4>
        <i className="footer_logo fab fa-facebook"></i>
      </a>
    </footer>
  );
}

export default Footer;
