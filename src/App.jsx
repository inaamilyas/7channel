import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";

// Lazy load components
const Navbar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy(() => import("./components/layout/Footer"));
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Posts = lazy(() => import("./pages/Posts"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div><Loader /></div>}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/featured-posts/:id`} element={<Posts />} />
          <Route path={`/contact`} element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
