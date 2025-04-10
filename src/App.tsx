import ContactForm from "./Contact";
import NavBar from "./Message";
import { Body, Carousel, ListGroup } from "./Underdog";
import Footer from "./Footer";
import './App.css'
function App(){

  return (
  <>
    <NavBar/>
    <Body/>
    <ListGroup/> 
    <ContactForm/>
    <Carousel/>
    <Footer/>
    </>
  );
}

export default App