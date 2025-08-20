import "./cardPlace.css"
import Tugu from "../../assets/mangunan.jpg"
import Mudal from "../../assets/mudal.jpg"
import Bukit from "../../assets/paralayang.jpg"
import parangtritis from "../../assets/parangtritis.jpg"
import Merapi from "../../assets/bunker.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import WOW from "wowjs";
import "animate.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";


const NextArrow = ({ onClick }) => {
    return (
        <div
        style={{
            // display: "block",
            // background: "rgba(0,0,0,0.5)",
            // borderRadius: "50%",
            padding: "10px",
            position: "absolute",
            top: "50%",
            right: "0px", // Adjusted for more space
            zIndex: 2,
            cursor: "pointer",
            transform: "translateY(-50%)",
        }}
        onClick={onClick}
        >
        {/* <i className="fa fa-arrow-right" style={{ color: "white" }}></i> */}
        <FaArrowRight style={{ color: "white" }}/>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
        style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "50%",
            padding: "10px",
            position: "absolute",
            top: "50%",
            left: "-15px", // Adjusted for more space
            zIndex: 2,
            cursor: "pointer",
            transform: "translateY(-50%)",
        }}
        onClick={onClick}
        >
        {/* <i className="fa fa-arrow-left" style={{ color: "white" }}></i> */}
        </div>
    );
};
  


export const CardPlace = () => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const onNavigate = (placeData) => {
        navigate(`/places/description/${placeData.name}`, {
            state: { data: placeData },
        });
    };

    const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:3000/api/v1/destination");
    
          console.log("API Response Place:", res.data);
          setData(res.data.data);
          setIsPending(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsError(true);
          setIsPending(false);
        }
      };

    useEffect(() => {
        fetchData();
    }, []);

    const listPlace = [
        { id:1, 
            destination_picture: Tugu, 
            // content: 'Tugu' ,
            name:"Hutan Pinus Mangunan",
            description:"Kebun Buah Mangunan adalah destinasi wisata yang menawarkan pengalaman memetik berbagai buah seperti durian, rambutan, dan jeruk. Dengan luas sekitar 24,5 hektar, kebun ini juga dikenal dengan pemandangan negeri di atas awan yang menakjubkan.",
            maxWTitle:"41.625rem",
            location:"Desa Mangunan, Jalan Imogiri-Dlingo, Sukorame, Mangunan, Kecamatan Dlingo, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
            Parking:"Tersedia Tempat Parking",
            price:" 5.000"
        },
        { id:2, 
            destination_picture: parangtritis, 
            // content: '' ,
            name:"Pantai Parangtritis ",
            description:"Pantai Parangtritis, terletak 27 km dari Yogyakarta, terkenal dengan pasir vulkanik hitam dan ombak besar. Dikenal karena legenda Nyi Roro Kidul, pantai ini menawarkan aktivitas seperti ATV dan berkuda, serta pemandangan matahari terbenam yang indah. Meskipun tidak aman untuk berenang, suasana di sini tetap memikat bagi pengunjung.",
            maxWTitle:"41.625rem",
            location:"Kecamatan Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta.",
            Parking:"Tersedia Tempat Parking",
            price:" 10.000"
        }, 
        { id:3, 
            destination_picture: Bukit, 
            content: 'Tugu' ,
            name:"Bukit Paralayang",
            description:"Bukit Paralayang adalah destinasi wisata yang menawarkan pemandangan spektakuler Pantai Parangtritis dari ketinggian. Dikenal sebagai tempat paralayang, pengunjung dapat menikmati pengalaman terbang dengan pemandu profesional.",
            maxWTitle:"41.625rem",
            location:"Jl.Desa Giricahyo, Kecamatan Purwosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta",
            Parking:"Tersedia Tempat Parking",
            price:" 5.000"
        },
        { id:4, 
            destination_picture: Merapi, 
            // content: 'Tugu' ,
            name:"Bunker Kaliadem Merapi",
            description:"Bunker Kaliadem Merapi adalah bangunan beton di lereng Gunung Merapi, Sleman, Yogyakarta. Dibangun tahun 2001 sebagai tempat evakuasi, bunker ini menjadi saksi tragedi tahun 2006 ketika dua relawan terjebak awan panas. Kini, meskipun tertimbun material vulkanik, Bunker Kaliadem menjadi objek wisata menarik.",
            maxWTitle:"41.625rem",
            location:"Desa Kinahrejo, Hargoninangun, Kecamatan Pakem, Sleman, Daerah Istimewa Yogyakarta",
            Parking:"Tersedia Tempat Parking",
            price:" 10.000"
        },
        { id:5, 
            destination_picture: Mudal, 
            // content: 'Tugu' ,
            name:"Sungai Mudal",
            description:"Sungai Mudal dikenal dengan air jernih berwarna toska, sungai ini berasal dari mata air yang mengalir sepanjang tahun. Pengunjung dapat berenang, berendam, dan bersantai di gazebo.",
            maxWTitle:"41.625rem",
            location:"Jalan Kaliurang Km 16, Area Sawah, Pakembinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
            Parking:"Tersedia Tempat Parking",
            price:" 10.000"
        },
    ]

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              } else {
                entry.target.classList.remove("show");
              }
            });
          },
          { threshold: 0.1 }
        );
    
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          observer.observe(card);
        });
    
        return () => {
          cards.forEach((card) => {
            observer.unobserve(card);
          });
        };
      }, []);

    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,   
        touchMove: true,      
        slidesToScroll: 1, 
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <div id="PlaceCard" className="slider-container" style={{ position: "relative" }}>
            <div className = "slider-card">
                <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-dark px-3">
                    Destination
                    </h6>
                    <h1 className="mb-5">Place To Visit</h1>
                </div>

                <div style= {{ position: "relative"}} >
                    <Slider {...settings}>
                        {listPlace.map((data, index) => (
                        <div onClick={() => onNavigate(data)} key={index} className="text-nowrap cursor-pointer">
                            <div
                            className="card"
                            style={{
                                backgroundImage: `url(${data.destination_picture})`,
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
        </div>


    //     <div id="PlaceCard" className="slider-container">
    //   <div className="overflow-hidden">
    //     <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
    //       <h6 className="section-title bg-white text-center text-dark px-3">Destination</h6>
    //       <h1 className="mb-5">Place To Visit</h1>
    //     </div>

    //     {isPending ? (
    //       <p>Loading...</p>
    //     ) : isError ? (
    //       <p>Error fetching data</p>
    //     ) : (
    //       <Slider {...settings}>
    //         {data.map((place, index) => (
    //           <div
    //             onClick={() => onNavigate(place)}
    //             key={index}
    //             className="text-nowrap cursor-pointer"
    //           >
    //             <div
    //               className="card"
    //               style={{
    //                 backgroundImage: `url(${place.destination_picture})`, // Assuming backend sends valid image URLs
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center",
    //                 backgroundRepeat: "no-repeat",
    //                 width: "90%",
    //                 height: "25rem",
    //                 borderRadius: "10px",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 justifyContent: "flex-end",
    //                 padding: "20px",
    //                 color: "white",
    //               }}
    //             >
    //               <h5 className="card-title">{place.name}</h5>
    //             </div>
    //           </div>
    //         ))}
    //       </Slider>
    //     )}
    //   </div>
    // </div>
    )
}