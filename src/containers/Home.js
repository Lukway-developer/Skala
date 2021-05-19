import Layout from "../components/Layout";

const Home = () => {
  const handleScrollToProducts = () => {
    let products = document.getElementById("products");
    let y = products.offsetTop
    window.scrollTo(0, y)
  }

  return (
    <section className="home">
      <img className="home_img" src="./images/cremas.png" alt="Cremas Skala" title="Cremas Skala"></img>
      <header className="home_text_container">
        <img className="home_logo" src="./images/brand/Skala - Logo (White).svg" alt="Skala Logo" />
        <div className="home_description_container">
          <div className="home_description_item">Calidad</div>
          <div className="home_description_item">Variedad</div>
          <div className="home_description_item">Innovación</div>
        </div>
        <button className="home_button" onClick={handleScrollToProducts}>Mira nuestros productos</button>
      </header>
    </section>
  );
}

export default Home;
