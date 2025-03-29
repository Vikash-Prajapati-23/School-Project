import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/LogIn/Login";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Addmission from "./components/Addmission/Addmission";
import StudentDashboard from "./pages/StudentDashBoard/StudentDashBoard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addmission" element={<Addmission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/StudentDashBoard" element={<StudentDashboard/>} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
