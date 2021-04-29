import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout currentPage="Home">
      <section className="home">
        <img className="home_img" src="./images/cremas.png" alt="Cremas Skala" title="Cremas Skala"></img>
        <header className="home_title_container">
          <h1 className="home_title">SKALA</h1>
          <h2 className="home_caption">Calidad, Variedad, Innovación<br></br>Productos 100% Veganos</h2>
        </header>
      </section>
    </Layout>
  );
}

export default Home;
