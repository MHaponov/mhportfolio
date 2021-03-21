import './App.css';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Head from './components/Head'

function App() {
  return (
    <div className="App" id="home" style={{height:"100%"}}>
      <NavBar />
      <Head />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App;
