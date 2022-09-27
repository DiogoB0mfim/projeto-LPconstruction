import GlobalStyle from "./globalStyle";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage/HeroSection";
import About from "./pages/About/About"
import Crafts from "./pages/Crafts/Crafts";
import Comments from "./pages/Comments/Comments";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
      <About /> 
      <Crafts />
      <Comments /> 
    </div>
  );
}

export default App;
