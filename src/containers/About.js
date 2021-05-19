// import Loader from "components/Loader"

const About = () => {
  return (
    <section className="about">
      <div className="about_card">
        <img className="about_logo" src="./images/brand/Skala - Logo.svg" alt="Skala Logo" />
        <h2 className="about_title">Sobre nosotros</h2>
        <div className="about_text_container">
          <p className="about_text">Nuestra marca apareció en 1986 con el objetivo de llevar calidad
            y precios justos al mercado de cosméticos. Actuando con transparencia e integridad, buscamos
            innovar construyendo mucho más que una gran marca, sino lo mejor para las personas, el
            medio ambiente y el cabello del mundo.
          </p>
          <img className="about_img" src="./images/logo-vegano.png" alt="100% Vegano, 0% Origen Natural"></img>
          <p className="about_text">
            Con 35 años de trayectoria en el mercado de cosmeticos, hemos
            demostrado que se pueden producir productos
            de <span className="about_text-green">alta calidad</span>,
            con <span className="about_text-yellow">precios accesibles</span> y que
            sean <span className="about_text-blue">amigables para los animales</span>
          </p>
          <p className="about_text">
            Somos amigos de los animales desde julio de 2018 al convertirnos en
            una marca <span className="about_text-green">100% Vegana</span> y
            al <span className="about_text-red">nunca realizar pruebas en animales</span>.
            Sabemos la importancia de producir productos veganos y entendemos que habitos
            y actitudes mejoran la calidad de vida
            , <span className="about_text-blue"> ayudando también a la humanidad y al planeta</span>
          </p>
          <p className="about_text-celebrate">¡Celebremos que nos hayas encontrado y que nosotros te hayamos encontrado a ti!</p>
        </div>
      </div>
    </section>
  );
}

export default About;
