import "../cardPlace/cardPlace.css";
import Gudeg from "../../assets/gudeg.png";
import kopi from "../../assets/kopiKlothok.jpg";
import tempo from "../../assets/tempo.jpg";
import raminten from "../../assets/raminten.jpg";
import sate from "../../assets/sate_ratu.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { useEffect,useState, useRef } from "react";
import WOW from "wowjs";
import "animate.css";
import { useNavigate } from "react-router-dom";

export const CardFood = () => {
    const listFood = [
        {    id:1, 
            name:  'Kopi Klotok',
            price:  10000 - 30.000 ,
            dish: 'Pengunjung dapat menikmati sajian kopi dan makanan khas desa sambil dikelilingi pemandangan sawah dan Gunung Merapi. Warung ini mengusung arsitektur tradisional Jawa, memberikan pengalaman kuliner yang otentik dan nyaman.',
            location:'Jalan Kaliurang Km 16, Area Sawah, Pakembinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta',                     
            restaurant_picture:kopi,
            // rating: 5,

            },

            { id:2, 
                    name: 'Gudeg Yu Djum',
                    price:  20000 ,
                    dish: 'import Gudeg from "../../assets/gudeg.png";',
                    location:'Jl.Ps. Kembang No.29, 001, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta dekat dengan berbagai atraksi wisata terkenal seperti Malioboro Street dan Tugu Jogja.',                     
            restaurant_picture:Gudeg,
            // rating: 5,

            },

            { id:3, 
                    name: 'Tempo Gelato',
                    price:  25000 - 50000 ,
                    dish: 'Dengan kombinasi varian rasa unik, tempat yang estetik, dan suasana yang nyaman, Tempo Gelato menjadi pilihan tepat bagi pecinta kuliner gelato yang ingin merasakan keunikan Yogyakarta.',
                    location:'Jalan Prawirotaman No.43, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta',                     
            restaurant_picture:tempo,
            // rating: 4.5,

            },
            { id:4, 
                name: 'The House Of Raminten',
                price:  30000 - 70.000 ,
                dish: 'House of Raminten bukan hanya tempat makan tetapi juga menghadirkan suasana dan konsep tradisional Jawa yang kuat. Dekorasi tempatnya sangat kental dengan budaya Jawa, lengkap dengan alunan musik gamelan yang memikat.',
                location:'Jalan Faridan M Noto No.7, Kotabaru, Kecamatan Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta',                     
            restaurant_picture:raminten,
            // rating: 5,

            },

            { id:5, 
                    name: 'Sate Ratu',
                    price:  25000 - 50000,
                    dish: 'Dengan sajian sate yang unik dan khas, serta lokasi yang strategis di Yogyakarta, Sate Ratu menjadi destinasi wisata kuliner yang wajib dikunjungi.',
                    location:'Jalan Sidomukti, Tiyosan, Condong Catur, Sleman, Yogyakarta',                     
            restaurant_picture:sate,
            // rating: 4,5,

            },
    ];

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isVisible, setIsVisible] = useState(Array(5).fill(false)); // Assuming 5 places
    const refArray = useRef([]);
    const navigate = useNavigate();

    const onNavigate = (foodData) => {
        navigate(`/food/description/${foodData.name}`, {
            state: { data: foodData },
        });
    };

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.dataset.index);
                    setIsVisible((prev) => {
                        const newVisible = [...prev];
                        newVisible[index] = true;
                        return newVisible;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        refArray.current.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [refArray]);

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
                    {listFood.map((data, index) => (
                    <div
                    ref={(el) => (refArray.current[index] = el)}
                    data-index={index}
                    className={`text-nowrap cursor-pointer animate__animated ${isVisible[index] ? "animate__fadeInUp" : ""}`}
                    style={{
                        visibility: isVisible[index] ? "visible" : "hidden",
                        opacity: isVisible[index] ? 1 : 0,
                        transition: "opacity 0.5s ease",
                    }}
                    key={index}
                    onClick={() => onNavigate(data)}
                >
                        <div
                        className="card"
                        style={{
                            backgroundImage: `url(${data.restaurant_picture})`,
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
                        <h5 className="card-title">{data.name}</h5>
                        {/* <p className="card-text">{data.content}</p> */}
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
