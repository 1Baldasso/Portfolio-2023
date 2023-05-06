import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import LanguageController from './Controller/LanguageController.ts';
function App() {
  new LanguageController("pt-BR");
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lucas Baldasso</title>
          <link rel="canonical" href="https://1baldasso-portfolio.vercel.app/" />
          <meta
            name="description"
            content="Portfolio Lucas Baldasso feito utilizando React"
          />
        </Helmet>
      </HelmetProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
