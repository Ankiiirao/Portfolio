import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import Intro from './components/Introduction/intro'
import Services from './components/services/services'
import Skills from './components/skills/skills'
import Client from './components/client/client'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services/>
      {/* <Skills /> */}
      <Client />
      <Footer />
    </div>
  );
}

export default App;
