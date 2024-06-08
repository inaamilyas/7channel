import { Suspense, lazy, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeOffer from "./pages/WhatWeOffer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

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
          <Route path={`/who-we-are`} element={<WhoWeAre />} />
          <Route path={`/about`} element={<AboutUs />} />
          <Route path={`/what-we-offer`} element={<WhatWeOffer />} />
          <Route path={`/contact`} element={<ContactUs />} />
          {/* <Route path={`/blog-detail/:name`} element={<BlogDetail />} />
          <Route path={`/PrivacyPolicy`} element={<Privacy />} />
          <Route path={`/TermsAndCondition`} element={<Terms />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
