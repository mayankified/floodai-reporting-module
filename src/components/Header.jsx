import React from "react";
import { Link } from "react-router-dom";
// import '../styles.css'

function Header() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1000);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 1000);
    });
  }, []);
  return (
    <header className="h-[5rem] font-poppins mx-auto shadow-xl flex flex-col justify-center bg-[#F3F8FF] w-full max overflow-hidden z-50">
      <div
        className={`h-full flex justify-start ${
          isMobile ? "w-full" : "w-11/12"
        } mx-auto`}
      >
        <div className="h-full flex items-center gap-5">
          <img src="/src/img/logo.png" alt="" className="w-[64px] h-[64px]" />
          <h2 className="text-[24px] font-poppins font-normal">Flood Sense - TEAM THETA</h2>
        </div>

       
      </div>
    </header>
  );
}

export default Header;
