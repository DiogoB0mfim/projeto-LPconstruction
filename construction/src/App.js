import GlobalStyle from "./globalStyle";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage/HeroSection";
import About from "./pages/About/About"

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
      <About />  
    </div>
  );
}

export default App;
