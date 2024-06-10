import { Suspense, lazy, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeOffer from "./pages/WhatWeOffer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
// const Blogs = lazy(() => import("./pages/Blogs"));
// const BlogDetail = lazy(() => import("./pages/BlogDetail"));
// const Privacy = lazy(() => import("./pages/Privacy"));
// const Terms = lazy(() => import("./pages/Terms"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>{/* <Loader /> */}</div>}>
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
