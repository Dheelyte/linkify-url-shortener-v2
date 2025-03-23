import './App.css'
import Header from './components/Header'
import Shortener from './components/Shortener';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="background"></div>
      <Header />
      <Shortener />
      <Footer />
    </>
  )
}

export default App;