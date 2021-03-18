import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Head from './components/Head'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <div className="App">
      <Grid container
        direction="column">
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item>
          <Head />
        </Grid>
        <Grid item>
          <About />
        </Grid>
        <Grid item>
          <ContactMe />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
