import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load pages and layout
const Layout = lazy(() => import("./components/layout/Layout"));
const Hero = lazy(() => import("./pages/Hero"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
