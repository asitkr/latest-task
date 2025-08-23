import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load pages and layout
const Hero = lazy(() => import("./pages/Hero"));
const Master = lazy(() => import("./pages/Master"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Layout = lazy(() => import("./components/layout/Layout"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/master" element={<Master />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
