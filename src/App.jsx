import { Suspense, lazy, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";

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
          {/* <Route path={`/blogs`} element={<Blogs />} /> */}
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
