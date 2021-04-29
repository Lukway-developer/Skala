import Layout from "components/Layout";
import Slider from "components/Slider";
// import Loader from "components/Loader"

const About = () => {
  return (
    <Layout currentPage="About">
      <section className="about">

        <Slider/>

        <div className="about_text_container">
          <img className="about_logo" src="./images/brand/Skala - Logo.svg" alt="Skala Logo" />
          <p className="about_text">
            Con 35 años de trayectoria en el mercado de cosmeticos, hemos
            demostrado que se pueden producir productos
            de <span className="about_text-green">alta calidad</span>,
            con <span className="about_text-yellow">precios accesibles</span> y que
            sean <span className="about_text-blue">amigables para los animales</span>
          </p>
          <img className="about_img" src="./images/logo-vegano.png" alt="100% Vegano, 0% Origen Natural"></img>
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
      </section>
    </Layout>
  );
}

export default About;
