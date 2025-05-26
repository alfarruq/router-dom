import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Club from "./pages/Club";
import Advantages from "./pages/Advantages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/club" element={<Club />} />
        <Route path="/advantages" element={<Advantages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
