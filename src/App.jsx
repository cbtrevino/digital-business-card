import './App.css';
import About from "/src/components/about.jsx";
import Footer from "/src/components/footer.jsx";
import Info from "/src/components/info.jsx";
import Interests from "/src/components/interests.jsx";
function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
