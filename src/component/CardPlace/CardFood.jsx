import "./cardPlace.css"
import Gudeg from "../../assets/gudeg.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';

export const CardFood = () => {

    const listPlace = [
        { img: Gudeg, title: 'Yogyakarta', content: 'Gudeg' },
        { img: Gudeg, title: 'Yogyakarta', content: 'Gudeg' },
        { img: Gudeg, title: 'Yogyakarta', content: 'Gudeg' },
        { img: Gudeg, title: 'Yogyakarta', content: 'Gudeg' },
        { img: Gudeg, title: 'Yogyakarta', content: 'Gudeg' },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, // Menggeser satu slide setiap kali scroll
        adaptiveHeight: true, // Menyesuaikan tinggi slider dengan konten
        responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    };
    return(

        <div className="slider-container">
            <h2 className={`hero-title text-dark fw-bold sans-serif justify-content-center`}>
                    Food Must Try
            </h2>
            <Slider {...settings}>
                {listPlace.map((item, index) => (
                <div key={index} onClick={() => onNavigate(item)} className="card-container">
                    <div
                    className="card"
                    style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "25rem",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "20px",
                        color: "white",
                    }}
                    >
                    <div className='d-flex'>
                        <h5 className="card-title me-auto">{item.title}</h5>
                        <b>4,5</b>
                        <div className = 'justify-align-center '>
                            <FaStar />
                        </div>
                    </div>
                    <p className="card-text">{item.content}</p>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    )
}