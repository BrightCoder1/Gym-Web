import Footer from "./Components/Footer";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Pages/Admin";
import CustomerList from "./Components/CustomerList";
import ContactMessages from "./Components/ContactMessage";
import Trainer from "./Pages/Trainer";
import Booking from "./Pages/Booking";
import Offered from "./Pages/Offered";
import AddOfferForm from "./Pages/AddOffer";
import AddTrainer from "./Pages/AddTrainer";
import AddNewAdmin from "./Pages/AddNewAdmin";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer className="index" />
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Route Create */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/members" element={<CustomerList />} />
          <Route path="/message" element={<ContactMessages />} />
          <Route path="/trainers" element={<Trainer />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/classes" element={<Offered />} />
          <Route path="/add/offer" element={<AddOfferForm />} />
          <Route path="/add/trainer" element={<AddTrainer />} />
          <Route path="/new/admin" element={<AddNewAdmin />} />
          <Route path="/add/member" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
