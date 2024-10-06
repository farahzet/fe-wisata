import "./description.css";
import "animate.css"; // Import animate.css
import { FaLocationDot } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { StarRate } from "../StarRate/StarRate";
import { IoIosPricetags } from "react-icons/io";

export const DescRestaurantt = ({
  isReverse,
  heading,
  text,
  image,
  location,
  maxWTitle,
  Parking,
  Price,
  idSection,
}) => {
  const imageClass = isReverse ? "order-md-last" : "order-md-first";

  return (
    <section
      className="container-xxl py-5"
      style={{ padding: "4rem 0", marginTop: "5rem" }}
    >
      <div className="container">
        <div className="row g-5">
          <div
            className={`col-lg-6 ${imageClass} animate__animated animate__fadeInLeft`}
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                src={image}
                className="img-fluid position-absolute w-100 h-100"
                alt="Hero image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column gap-3 animate__animated animate__fadeInRight">
            <h1 className="mb-4">
              <b>
                Kuliner <span className="text-primary">{heading}</span>
              </b>
            </h1>
            {text && <p className="mb-4">{text}</p>}
            <div className="d-flex align-items-center mb-2">
              <FaLocationDot className="me-2" style={{ fontSize: "1.5rem" }} />
              {location && <p className="mb-0">{location}</p>}
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaParking className="me-2" style={{ fontSize: "1.5rem" }} />
              {Parking && <p className="mb-0">{Parking}</p>}
            </div>
            <div className="d-flex align-items-center mb-2">
              <IoIosPricetags className="me-2" style={{ fontSize: "1.5rem" }} />
              {Price && <p className="mb-0">Rp. {Price}</p>}
            </div>
            <div className="d-flex align-items-center">
              <StarRate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
