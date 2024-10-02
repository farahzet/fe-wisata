import "./cardPlace.css"
import Tugu from "../../assets/tugu.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const CardPlace = () => {
    const listPlace = [
        { img: Tugu, title: 'Yogyakarta', content: 'Tugu' },
        { img: Tugu, title: 'Yogyakarta', content: 'Tugu' },
        { img: Tugu, title: 'Yogyakarta', content: 'Tugu' },
        { img: Tugu, title: 'Yogyakarta', content: 'Tugu' },
        { img: Tugu, title: 'Yogyakarta', content: 'Tugu' },
    ]

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    // };

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

    return (
        // <div className="my-5 d-flex justify-content-center align-items-center pb-5 mx-3">
        //     <div className="row gap-3 row-cols-1 justify-content-center" >
        //         <Slider {...settings}>
        //         {listPlace.map((item, index) => (
        //             <div key={index} className="card col rounded-4 border-0 shadow align-items-center justify-content-center" 
        //             style={{
        //                 maxWidth: '20rem',
        //                 width: '20rem',
        //                 backgroundImage: `url(${item.img})`,
        //                 backgroundSize: 'cover',
        //                 backgroundPosition: 'center',
        //                 backgroundRepeat: 'no-repeat',
        //                 height: '25rem', 
        //             }}
        //             >
        //                 <div className="card-body d-flex flex-column justify-content-between align-items-center rounded-4">
        //                 <div className="flex-grow-1" />
        //                     <h5 className="card-title text-center text-white fw-semibold">{item.title}</h5>
        //                     <p className="card-text text-center text-white pb-3 fw-medium">
        //                         {item.content}
        //                     </p>
        //                 </div>
        //             </div>
        //         ))
        //         }
        //         </Slider>
        //     </div>  
        // </div>

        // <div className="h-screen bg-slate-600 pt-10">
        //     <div className="w-3/4 m-auto" >
        //         <Slider {...settings}>
        //         {listPlace.map((item, index) => (
        //             <div key={index} className="card col rounded-4 border-0 shadow align-items-center justify-content-center" 
        //             style={{
        //                 maxWidth: '20rem',
        //                 width: '20rem',
        //                 backgroundImage: `url(${item.img})`,
        //                 backgroundSize: 'cover',
        //                 backgroundPosition: 'center',
        //                 backgroundRepeat: 'no-repeat',
        //                 height: '25rem', 
        //             }}
        //             >
        //                 <div className="card-body d-flex flex-column justify-content-between align-items-center rounded-4">
        //                 <div className="flex-grow-1" />
        //                     <h5 className="card-title text-center text-white fw-semibold">{item.title}</h5>
        //                     <p className="card-text text-center text-white pb-3 fw-medium">
        //                         {item.content}
        //                     </p>
        //                 </div>
        //             </div>
        //         ))
        //         }
        //         </Slider>
        //     </div>  
        // </div>

        // <div className="my-5 pb-5 mx-3">
        //     <Slider {...settings}>
        //         {listPlace.map((item, index) => (
        //             <div
        //                 key={index}
        //                 className="card-container"
        //             >
        //                 <div
        //                     className="card rounded-4 border-0 shadow d-flex flex-column justify-content-between align-items-center"
        //                     style={{
        //                         backgroundImage: `url(${item.img})`,
        //                         backgroundSize: "cover",
        //                         backgroundPosition: "center",
        //                         backgroundRepeat: "no-repeat",
        //                         height: "25rem",
        //                         width: "100%", 
        //                         maxWidth: "20rem",
        //                     }}
        //                 >
        //                     <div className="card-body text-center d-flex flex-column justify-content-end align-items-center rounded-4 bg-opacity-50">
        //                         <h5 className="card-title text-white fw-semibold">
        //                             {item.title}
        //                         </h5>
        //                         <p className="card-text text-white pb-3 fw-medium">
        //                             {item.content}
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </Slider>
        // </div>

        <div className="slider-container">
            <h2 className={`hero-title text-dark fw-bold sans-serif justify-content-center`}>
                    Place To Visit
            </h2>
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
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    )
}