import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Main from './pages/Main/Main'
import PopularClases from './pages/PopularClasses/PopularClasses'

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <PopularClases />
      <Footer />
    </>
  )
}

export default App
