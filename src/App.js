import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  // const showCart = () => {};

  return (
    <div className="app">
      <Header />
      <Cart />
      <br />
      <Banner />
      <br />
      <br />
      <Home />
    </div>
  );
}

export default App;
