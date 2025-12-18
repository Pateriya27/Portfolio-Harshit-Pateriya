import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import { Data } from "./Data";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Skills Data={Data}/>
      <Projects Data={Data}/>
      <Contact/>
    </div>
  );
}

export default App;
