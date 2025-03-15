import { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsRendering(false);
    });
  }, []);

  return (
    <>
      {isRendering && <Preloader />}
      <div className={`content ${isRendering ? "hidden" : ""}`}>
        <Navbar />
        <Outlet /> {/* Renders nested routes */}
      </div>
    </>
  );
}

export default App;
