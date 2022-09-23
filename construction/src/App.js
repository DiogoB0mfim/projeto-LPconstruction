import GlobalStyle from "./globalStyle";
import Header from "./pages/Header/Header";
import HomePage from "./pages/HomePage/HeroSection";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />  
    </div>
  );
}

export default App;
