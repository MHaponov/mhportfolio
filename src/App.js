import './App.css'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import NavBar from './components/NavBar'
import ContactMe from './components/contactMe/ContactMe'
import Footer from './components/Footer'
import Head from './components/head/Head'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#091921'
    },
    secondary: {
      main: '#2F968B'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" id="home">
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
