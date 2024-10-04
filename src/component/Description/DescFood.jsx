import './description.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { StarRate } from '../StarRate/StarRate';
import { IoIosPricetags } from "react-icons/io";

export const DescFood = ({
    isReverse,
    heading,
    text,
    image,
    location,
    maxWTitle,
    Parking,
    Price,
    idSection}) => {

    const imageClass = isReverse ? "order-md-last" : "order-md-first";
    return(
        <>
            <section className="container-xxl px-4 px-lg-5 px-xxl-0 gap-5 gap-lg-0 d-flex flex-column flex-md-row justify-content-between mx-auto" style={{ padding: '4rem 0', marginTop: '5rem' }}>
            <div className={`${imageClass}`}>
                <img
                    src={image}
                    width={640}
                    height={360}
                    className="hero-image img-fluid"
                    alt="Hero image"
                />
            </div>
            <div className="d-flex flex-column gap-2 align-content-center" style={{ maxWidth: maxWTitle, marginLeft: '2rem' }}>
                <h4 className={`hero-title text-primary poppins`}>
                    {heading}
                </h4>
                {text &&
                <p className="text-green-300 fw-medium">
                    {text}
                </p>
                }
                <div className="d-flex align-items-center">
                    <FaLocationDot className="me-2" style={{ fontSize: '1.5rem',position: 'relative'  }} />
                    {location && 
                        <p className="text-green-300 fw-medium mb-0" style={{ lineHeight: '1.5rem', marginBottom: '0' }}>
                            {location}
                        </p>
                    }
                </div>
                <div className="d-flex align-items-center">
                    <FaParking className="me-2" style={{ fontSize: '1.5rem',position: 'relative'  }} />
                    {Parking && 
                        <p className="text-green-300 fw-medium mb-0" style={{ lineHeight: '1.5rem', marginBottom: '0' }}>
                            {Parking}
                        </p>
                    }
                </div>
                <div className="d-flex align-items-center">
                    <IoIosPricetags className="me-2" style={{ fontSize: '1.5rem',position: 'relative'  }} />
                    {Price && 
                        <p className="text-green-300 fw-medium mb-0" style={{ lineHeight: '1.5rem', marginBottom: '0' }}>
                            Rp. {Price} 
                        </p>
                    }
                </div>
                <div className="d-flex align-items-center">
                    <StarRate />
                </div>
                

                

            </div>
            </section>
        </>
    )
}