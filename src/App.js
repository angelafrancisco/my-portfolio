import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.scss';

function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>

  );
}

export default App;
