const ContactPopUp = ({ handleHideContact}) => {
  return (
    <div className="contact">
      <div className="contact_card">
        <h2 className="contact_title">¡Si que tienes ganas de tener un pelo hermoso!</h2>
        <h3 className="contact_text">
          Pero por cuestiones de stock, <br/> como maximo vendemos 5 productos <br/><br/>
          Por favor, comunicate con nosotros para <br/> compras por mayor
        </h3>
        <div className="contact_item_container">
          <a
            className="contact_item"
            href="https://www.instagram.com/skalacosmeticos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="contact_title">Instagram</h4>
            <i className="contact_logo fab fa-instagram"></i>
          </a>
          <div className="contact_item">
            <h4 className="contact_title">Atención al Cliente</h4>
            <p className="contact_item_text">
              De lunes a viernes desde las 8:00 hasta las 17:30 hs
              (Excepto feriados)
            </p>
            <div className="contact_logo_container">
              <a href="tel:+0800 1234 5678">
                <i className="fas fa-phone" />
              </a>
              <a href="mailto: mail.inventado@no.existe.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <a
            className="contact_item"
            href="https://www.facebook.com/skalacosmeticos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="contact_title">Facebook</h4>
            <i className="contact_logo fab fa-facebook"></i>
          </a>
        </div>
        <div className="contact_button-close" onClick={handleHideContact}>
          <i className="fas fa-times" />
        </div>
      </div>
    </div>
  );
}

export default ContactPopUp;

