import { CartContextProvider } from "./context/cartContext";
import Body from "./components/app/Body";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Body />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
