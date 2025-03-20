import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import BookASeat from './pages/BookASeat/BookASeat'
import Main from './pages/Main/Main'
import PopularClases from './pages/PopularClasses/PopularClasses'
import Teachers from './pages/Teachers/Teachers'

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <PopularClases />
      <BookASeat />
      <Teachers />
      <Footer />
    </>
  )
}

export default App
