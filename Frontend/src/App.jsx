// App.jsx
import Footer from "./Components/Footer";
import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
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
import EditOffer from "./Components/EditOffer";
import EditTrainer from "./Components/EditTrainer";
import MemberShow from "./Pages/MemberShow";
import EditMember from "./Components/EditMember";
import UserProtectWrapper from "./Pages/UserProtectWrapper";
import Revenue from "./Pages/Revenue";

const App = () => {
  return (
    <>
      <ToastContainer className="4index" />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <UserProtectWrapper>
            <Admin />
          </UserProtectWrapper>
        } />
        <Route path="/members" element={
          <UserProtectWrapper>
            <CustomerList />
          </UserProtectWrapper>
        } />
        <Route path="/message" element={
          <UserProtectWrapper>
            <ContactMessages />
          </UserProtectWrapper>
        } />
        <Route path="/trainers" element={
          <UserProtectWrapper>
            <Trainer />
          </UserProtectWrapper>
        } />
        <Route path="/bookings" element={
          <UserProtectWrapper>
            <Booking />
          </UserProtectWrapper>
        } />
        <Route path="/classes" element={
          <UserProtectWrapper>
            <Offered />
          </UserProtectWrapper>
        } />
        <Route path="/add/offer" element={
          <UserProtectWrapper>
            <AddOfferForm />
          </UserProtectWrapper>
        } />
        <Route path="/add/trainer" element={
          <UserProtectWrapper>
            <AddTrainer />
          </UserProtectWrapper>
        } />
        <Route path="/new/admin" element={
          <UserProtectWrapper>
            <AddNewAdmin />
          </UserProtectWrapper>
        } />
        <Route path="/add/member" element={
          <UserProtectWrapper>
            <Register />
          </UserProtectWrapper>
        } />
        <Route path="/members/profile" element={
          <UserProtectWrapper>
            <MemberShow />
          </UserProtectWrapper>
        } />

        {/* Edit Routes */}
        <Route path="/edit/offer/:id" element={
          <UserProtectWrapper>
            <EditOffer />
          </UserProtectWrapper>
        } />
        <Route path="/edit/trainer/:id" element={
          <UserProtectWrapper>
            <EditTrainer />
          </UserProtectWrapper>
        } />
        <Route path="/member/profile/:id" element={
          <UserProtectWrapper>
            <MemberShow />
          </UserProtectWrapper>
        } />
        <Route path="/edit/member/:id" element={
          <UserProtectWrapper>
            <EditMember />
          </UserProtectWrapper>
        } />
        <Route path="/revenue" element={
          <UserProtectWrapper>
            <Revenue />
          </UserProtectWrapper>
        }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
