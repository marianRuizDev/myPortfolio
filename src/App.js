import logo from './logo.svg';
import './App.css';
import Hello from './sections/Hello/Hello';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
    <Header />
    <Hello />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
