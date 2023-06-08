import styles from "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setHide(true);
      } else {
        setHide(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={"nav " + (hide && "hidden")}>
      <Link to={"/home"}>
        <div className="item">
          <p>Venuezy</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
