import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layouts/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
