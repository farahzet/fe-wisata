import "../Description/description.css"
import "animate.css"; // Import animate.css
import { FaLocationDot } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { StarRate } from "../StarRate/StarRate";
import { IoIosPricetags } from "react-icons/io";
import { useLocation } from 'react-router-dom';

export const PlaceDescription = ({
    // isReverse,
    // heading,
    // text,
    // image,
    // location,
    // maxWTitle,
    // bgImage,
    // Parking,
    // Price,
    // idSection,
    }) => {
    // const imageClass = isReverse ? "order-md-last" : "order-md-first";
    const location = useLocation();
    const placeData = location.state?.data;
    if (!placeData) {
        return <div>Place data not found.</div>;
      }

    return(
        <section
        className="container-xxl py-5"
        style={{ padding: "4rem 0", marginTop: "5rem" }}
        >
            <div className="container">
            <div className="row g-5">
                <div
                className={`col-lg-6 ${placeData.isReverse ? 'last' : 'first'} animate__animated animate__fadeInLeft`}
                style={{ minHeight: 400 }}
                >
                <div className="position-relative h-100">
                    <img
                    src={placeData.destination_picture}
                    className="img-fluid position-absolute w-100 h-100"
                    alt="Hero image"
                    style={{ objectFit: "cover" }}
                    />
                </div>
                </div>
                <div className="col-lg-6 d-flex flex-column gap-3 animate__animated animate__fadeInRight">
                <h1 className="mb-4">
                    <b>
                    Wisata <span className="text-dark">{placeData.name}</span>
                    </b>
                </h1>
                {placeData.description && <p className="mb-4">{placeData.description}</p>}
                <div className="d-flex align-items-center mb-2">
                    <FaLocationDot className="me-2" style={{ fontSize: "1.5rem" }} />
                    {placeData.location && <p className="mb-0">{placeData.location}</p>}
                </div>
                <div className="d-flex align-items-center mb-2">
                    <FaParking className="me-2" style={{ fontSize: "1.5rem" }} />
                    {placeData.Parking && <p className="mb-0">{placeData.Parking}</p>}
                </div>
                <div className="d-flex align-items-center mb-2">
                    <IoIosPricetags className="me-2" style={{ fontSize: "1.5rem" }} />
                    {placeData.price && <p className="mb-0">Rp. {placeData.price}</p>}
                </div>
                <div className="d-flex align-items-center">
                    <b>Berikan Rating :   </b><StarRate className="me-5" />
                </div>
                </div>
            </div>
            </div>
        </section>
        )
}