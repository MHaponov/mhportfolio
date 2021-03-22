import './App.css'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import NavBar from './components/NavBar'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Head from './components/Head'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#380E36'
    },
    secondary: {
      main: '#F3D9DA'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" id="home" style={{ height: "100%" }}>

        <NavBar />
        <Head />
        <About />
        <Projects />
        <ContactMe />
        <Footer />

      </div>
    </MuiThemeProvider>
  )
}

export default App;
