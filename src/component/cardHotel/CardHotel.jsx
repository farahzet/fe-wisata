import "../cardPlace/cardPlace.css"
import Hotel from "../../assets/ambarukmo.jpg"
import royal from "../../assets/royal_hotel.jpg"
import prawirotaman from "../../assets/prawirotaman.jpg"
import ibis from "../../assets/ibis.jpg"
import KHAS from "../../assets/KHAS.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import WOW from "wowjs";
import "animate.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CardHotel = () =>{

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const onNavigate = (hotelData) => {
        navigate(`/hotel/description/${hotelData.name}`, {
            state: { data: hotelData },
        });
    };

    const listHostel = [
        {    id:1, 
            name:  'Royal Malioboro by Aston',
            price:  927000 ,
            facility: 'WiFi gratis, sarapan, kolam renang luar ruangan, kolam renang anak, dan pusat kebugaran, cafe, spa, rooftop, ruang rapat, brangkas. Terdapat beberapa jenis kamar yang tersedia, seperti Deluxe, Standard, Executive, dan Suite.',
            location:'Jl.Ps. Kembang No.29, 001, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta dekat dengan berbagai atraksi wisata terkenal seperti Malioboro Street dan Tugu Jogja.',                     
            hostel_picture:royal,
            // rating: 5,

            },

            { id:2, 
                    name: 'Gallery Prawirotaman',
                    price:  927000 ,
                    facility: 'WiFi gratis, sarapan, kolam renang luar ruangan, kolam renang anak, dan pusat kebugaran, cafe, spa, rooftop, ruang rapat, brangkas. Terdapat beberapa jenis kamar yang tersedia, seperti Deluxe, Standard, Executive, dan Suite.',
                    location:'Jl.Ps. Kembang No.29, 001, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta dekat dengan berbagai atraksi wisata terkenal seperti Malioboro Street dan Tugu Jogja.',                     
            hostel_picture:prawirotaman,
            // rating: 5,

            },

            { id:3, 
                    name: 'Ibis Yogyakarta',
                    price:  927000 ,
                    facility: 'WiFi gratis, sarapan, kolam renang luar ruangan, kolam renang anak, dan pusat kebugaran, cafe, spa, rooftop, ruang rapat, brangkas. Terdapat beberapa jenis kamar yang tersedia, seperti Deluxe, Standard, Executive, dan Suite.',
                    location:'Jl.Ps. Kembang No.29, 001, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta dekat dengan berbagai atraksi wisata terkenal seperti Malioboro Street dan Tugu Jogja.',                     
            hostel_picture:ibis,
            // rating: 4.5,

            },
            { id:4, 
                name: 'Khas Tugu',
                price:  927000 ,
                facility: 'WiFi gratis, sarapan, kolam renang luar ruangan, kolam renang anak, dan pusat kebugaran, cafe, spa, rooftop, ruang rapat, brangkas. Terdapat beberapa jenis kamar yang tersedia, seperti Deluxe, Standard, Executive, dan Suite.',
                location:'Jl.Ps. Kembang No.29, 001, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta dekat dengan berbagai atraksi wisata terkenal seperti Malioboro Street dan Tugu Jogja.',                     
            hostel_picture:KHAS,
            // rating: 5,

            },

            { id:5, 
                    name: 'Royal Ambarukmo',
                    price:  927000 ,
                    facility: 'WiFi gratis, sarapan, kolam renang luar ruangan, kolam renang anak, dan pusat kebugaran, cafe, spa, rooftop, ruang rapat, brangkas. Terdapat beberapa jenis kamar yang tersedia, seperti Deluxe, Standard, Executive, dan Suite.',
                    location:'Jl.Ps. Kembang No.29, 001, Sosromenduran, Gedong Tengen, Kota Yogyakarta, Daerah Istimewa Yogyakarta dekat dengan berbagai atraksi wisata terkenal seperti Malioboro Street dan Tugu Jogja.',                     
            hostel_picture:Hotel,
            // rating: 4,5,

            },
        ]

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/v1/hostel");
    
          console.log("API Response:", res.data.data);
          setData(res.data.data); // Asumsi data berada di dalam results
          setIsPending(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsError(true);
          setIsPending(false);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

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
    return(
        <div id="HotelCard" className="slider-container">
            <div className = "overflow-hidden">
            <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-dark px-3">
            Hotel
            </h6>
            <h1 className="mb-5">Find & Book</h1>
        </div>

            <Slider {...settings}>
                {listHostel.map((data, index) => (
                <div onClick={() => onNavigate(data)} key={index} className="text-nowrap cursor-pointer">
                    <div
                    className="card"
                    style={{
                        backgroundImage: `url(${data.hostel_picture})`,
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
                    {/* <p className="card-text">{item.content}</p> */}
                    </div>
                </div>
                ))}
            </Slider>

            </div>            
        </div>
    )
}