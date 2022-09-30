import GlobalStyle from "./globalStyle";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage/HeroSection";
import About from "./pages/About/About";
import Crafts from "./pages/Crafts/Crafts";
import Comments from "./pages/Comments/Comments";
import Advantages from "./pages/Advantages/Advantages";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
      <About />
      <Crafts />
      <Comments />
      <Advantages />
      <Footer />
    </div>
  );
};

export default App;
