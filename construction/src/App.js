import GlobalStyle from "./globalStyle";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage/HeroSection";
import About from "./pages/About/About"
import Crafts from "./pages/Crafts/Crafts";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
      <About /> 
      <Crafts /> 
    </div>
  );
}

export default App;
