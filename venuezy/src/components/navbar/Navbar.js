import styles from "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
      <div className="item">
        <p>Venuezy</p>
        {/* <Image src="/logo.svg" height={50} width={250} alt="logo" /> */}
      </div>
      {/* <ul className="navright">
        <Link to="hero" spy smooth duration={500}>
          {" "}
          <div className="item">
            <li className="navitem">Home</li>
          </div>
        </Link>
        <Link to="about" spy smooth duration={500}>
          {" "}
          <div className="item">
            <li className="navitem">About</li>
          </div>
        </Link>

        <Link to="timeline" spy smooth duration={500}>
          {" "}
          <div className="item">
            <li className="navitem">Timeline</li>
          </div>
        </Link>

        <Link to="sponsors" spy smooth duration={500}>
          {" "}
          <div className="item">
            <li className="navitem">Sponsors</li>
          </div>
        </Link>

        <Link to="faq" spy smooth duration={500}>
          {" "}
          <div className="item">
            <li className="navitem">FAQs</li>
          </div>
        </Link>

        <Link to="contacts" spy smooth duration={500}>
          {" "}
          <div className="item">
            <li className="navitem">Contacts</li>
          </div>
        </Link>
      </ul> */}
    </div>
  );
};

export default Navbar;
