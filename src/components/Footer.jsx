const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_card">
        <div className="footer_item_container">
          <a
            className="footer_item"
            href="mailto: email.inventado@no.existe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="footer_item"
            href='href="tel:+0800 1234 5678"'
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-phone" />
          </a>
          <a
            className="footer_item"
            href="https://www.instagram.com/skalacosmeticos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="footer_logo fab fa-instagram"></i>
          </a>
          <a
            className="footer_item"
            href="https://www.facebook.com/skalacosmeticos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="footer_logo fab fa-facebook"></i>
          </a>
        </div>

        <div className="footer_item">
          <h4 className="footer_title">Atención al Cliente</h4>
          <p className="footer_text">
            De lunes a viernes desde las 8:00 hasta las 17:30 hs
            (Excepto feriados)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
