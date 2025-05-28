import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home"));
const Brand = lazy(() => import("./pages/Brand"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Club = lazy(() => import("./pages/Club"));
const Advantages = lazy(() => import("./pages/Advantages"));

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
          <Route path="*" element={<h3>Not Fount... </h3>} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
