import { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsRendering(false);
      }, 650)
    });
  }, []);

  return (
    <>
      {isRendering && <Preloader />}
      <div className={`${isRendering ? "hidden" : ""}`}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
