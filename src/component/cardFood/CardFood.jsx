import "../cardPlace/cardPlace.css";
import Gudeg from "../../assets/gudeg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

export const CardFood = () => {
    const listPlace = [
        { img: Gudeg, title: "Yogyakarta", content: "Gudeg" },
        { img: Gudeg, title: "Yogyakarta", content: "Gudeg" },
        { img: Gudeg, title: "Yogyakarta", content: "Gudeg" },
        { img: Gudeg, title: "Yogyakarta", content: "Gudeg" },
        { img: Gudeg, title: "Yogyakarta", content: "Gudeg" },
    ];

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        wow.sync();

        return () => {
        wow.sync();
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,   
        touchMove: true,      
        slidesToScroll: 1, 
        adaptiveHeight: true, 
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

    return (
        <div id="FoodCard" className="slider-container">
            <div className = "overflow-hidden">
                <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-dark px-3">
                Culinary
                </h6>
                <h1 className="mb-5">Food Must Try</h1>
                </div>

                <Slider {...settings}>
                    {listPlace.map((item, index) => (
                    <div key={index} className="card-container">
                        <div
                        className="card"
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "90%",
                            height: "25rem",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            padding: "20px",
                            color: "white",
                        }}
                        >
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.content}</p>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
