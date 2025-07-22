import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import UserProfile from "./pages/UserProfile";
import Product2 from "./pages/Product2";
import Fish from "./pages/Fish";
import Meat from "./pages/Meat";
import { User } from "./pages/User";
import Shoes from "./pages/Shoes";
import Form from "./pages/Form";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="about" element={<About />} />
        <Route path="about-us" element={<Navigate to="/about" />} />
        <Route path="service" element={<Services />} />
        <Route path="fetch" element={<User />} />
        <Route path="signup" element={<Form />} />
        <Route path="profile/:username" element={<UserProfile />} />
        <Route path="product" element={<Product2 />}>
          <Route path="fish" element={<Fish />} />
          <Route path="meat" element={<Meat />} />
          <Route path="shoe" element={<Shoes />} />
        </Route>
        {/* <Route path="/product/fish" element={<Fish/>}/> */}
        <Route path="*" element={<NotFound />} /> //Wildcard Route
      </Routes>
      <Footer />
    </>
  );
};

export default App;
