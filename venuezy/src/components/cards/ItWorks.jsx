import Cards from "./Card";
import "./ItWorks.css";
import bookIcon from "../../assets/bookIcon.svg";
import enlistIcon from "../../assets/enlistIcon.svg";
import volunteerIcon from "../../assets/volunteerIcon.svg";
import accessIcon from "../../assets/accessIcon.svg";

const ItWorks = () => {
  return (
    <div className="howWorks">
      <div className="title1">
        <h1 className="titleHead">
          How it <span style={{ color: "#DEBFA4" }}>Works</span>
        </h1>
        <p className="titleText">
          Don’t Worry, We’ll keep it very simple. Get started
        </p>
      </div>
      <div className="speakers">
        <div className="cards">
          <div data-aos="flip-up" data-aos-delay="300">
            <Cards
              name="Enlist your Venue"
              img={enlistIcon}
              designation="Enlist your free space for social good."
            />
          </div>
          <div data-aos="flip-up" data-aos-delay="450">
            <Cards
              name="Book a Venue"
              img={bookIcon}
              designation="Get the ideal venue for your Community Events."
            />
          </div>
          <div data-aos="flip-up" data-aos-delay="600">
            <Cards
              name="Become a Volunteer "
              img={volunteerIcon}
              designation="Support the social cause."
            />
          </div>
          <div data-aos="flip-up" data-aos-delay="750">
            <Cards
              name="Access equal opportunities"
              img={accessIcon}
              designation="Get access to equal opportunities with unbiased payment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItWorks;
