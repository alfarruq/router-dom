import { Route, Routes, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Brand = lazy(() => import("./pages/Brand"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Club = lazy(() => import("./pages/Club"));
const Advantages = lazy(() => import("./pages/Advantages"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h3>Loading...</h3>} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/club" element={<Club />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
