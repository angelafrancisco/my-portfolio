import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Footer from './components/footer';
import './App.scss';

function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <div className="main-content">
          <About/>
          <Portfolio/>
          <Skills/>
        </div>
        <Footer/>
      </div>

  );
}

export default App;
