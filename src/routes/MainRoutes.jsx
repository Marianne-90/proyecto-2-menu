import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "components/Footer";
import { Documents, Modifications, System, Home } from "pages";
import { Navbar } from "components/Navbar";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doc" element={<Documents />} />
            <Route path="/modifications" element={<Modifications />} />
            <Route path="/system" element={<System />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
