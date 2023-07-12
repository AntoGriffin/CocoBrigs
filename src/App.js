import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Team from "./Components/Team";





function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>

    <Routes>
      

        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/team" element={<Team />}/>
      </Routes>
    
      
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
