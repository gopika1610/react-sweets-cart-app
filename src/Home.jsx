import Hero from "./Hero";
import Products from "./Products";
import Journey from "./Journey";
import Categories from "./Categories";
import Infosection from "./Infosection";
import Festivebakes from "./Festivebakes";
import Testimonials from "./Testimonials";

function Home({ handleAddToCart }) {
  return (
    <>
      <Hero />
      <Products handleAddToCart={handleAddToCart} />
      <Journey />
      <Categories />
      <Infosection />
      <Festivebakes />
      <Testimonials />
    </>
  );
}

export default Home;
