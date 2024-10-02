import "./hero.css"

export const Hero = ({
    isReverse,
    heading,
    text,
    image,
    maxWTitle,
    showPlay,
    idSection,
    bgImage
}) => {
    const imageClass = isReverse ? "order-md-last" : "order-md-first";
    return (
        <section id={idSection} className="container-xxl px-4 px-lg-5 px-xxl-0 gap-3 gap-lg-0 flex-column flex-md-row justify-content-between mx-auto" 
        style={{
            padding: '15rem 0rem', 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
        }}>
            {/* <div className={`${imageClass}`}>
                <img
                    src={image}
                    width={640}
                    height={360}
                    className="hero-image img-fluid"
                    alt="Hero image"
                />
            </div> */}
            <div className="d-flex flex-column gap-2 justify-content-center align-items-center text-center" style={{ maxWidth: maxWTitle }}>
                <h1 className={`hero-title text-dark fw-bold sans-serif`}>
                    {heading}
                </h1>
                {text &&
                <p className="text-white-300 fw-medium">
                    {text}
                </p>
                }
            </div>
        </section>
    )
}