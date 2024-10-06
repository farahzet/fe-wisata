import React, { useEffect, useRef, useState } from "react";
import kopi from "../../assets/kopiKlothok.jpg";
import "./popularDestination.css";
import "animate.css"; // Pastikan untuk mengimpor animate.css jika Anda menginstalnya

export const PopularDestination = () => {
  const destinations = [
    {
      id: 1,
      image: kopi,
      discount: "30% OFF",
      location: "Thailand",
      delay: "0.1s",
    },
    {
      id: 2,
      image: kopi,
      discount: "25% OFF",
      location: "Malaysia",
      delay: "0.3s",
    },
    {
      id: 3,
      image: kopi,
      discount: "35% OFF",
      location: "Australia",
      delay: "0.5s",
    },
    {
      id: 4,
      image: kopi,
      discount: "20% OFF",
      location: "Indonesia",
      delay: "0.7s",
    },
  ];

  const [isVisible, setIsVisible] = useState(
    Array(destinations.length).fill(false)
  );
  const refArray = useRef([]);

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
            newVisible[index] = true; // Set elemen sebagai terlihat
            return newVisible;
          });
          observer.unobserve(entry.target); // Hentikan observasi setelah elemen muncul
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

  return (
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h6>
          <h1 className="mb-5">Destinasi Populer</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              {destinations.slice(0, 3).map((destination, index) => (
                <div
                  ref={(el) => (refArray.current[index] = el)} // Simpan referensi elemen
                  data-index={index}
                  className={`col-lg-${
                    destination.id === 1 ? "12" : "6"
                  } col-md-12 animate__animated ${
                    isVisible[index] ? `animate__fadeInUp` : ""
                  }`} // Tambahkan kelas animasi jika terlihat
                  style={{
                    animationDelay: destination.delay,
                    visibility: isVisible[index] ? "visible" : "hidden", // Mengatur visibilitas
                    opacity: isVisible[index] ? 1 : 0, // Mengatur opacity
                    transition: "opacity 0.5s ease", // Mengatur transisi untuk opacity
                  }}
                  key={destination.id}
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href="#"
                  >
                    <img
                      className="img-fluid"
                      src={destination.image}
                      alt={destination.location}
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      {destination.discount}
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      {destination.location}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={(el) => (refArray.current[3] = el)} // Simpan referensi elemen untuk yang ke-4
            data-index={3}
            className={`col-lg-5 col-md-6 animate__animated ${
              isVisible[3] ? "animate__fadeInUp" : ""
            }`} // Tambahkan kelas animasi jika terlihat
            style={{
              minHeight: 350,
              animationDelay: "0.7s",
              visibility: isVisible[3] ? "visible" : "hidden", // Mengatur visibilitas
              opacity: isVisible[3] ? 1 : 0, // Mengatur opacity
              transition: "opacity 0.5s ease", // Mengatur transisi untuk opacity
            }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href="#"
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={destinations[3].image}
                alt={destinations[3].location} // Mengganti alt untuk aksesibilitas
                style={{ objectFit: "cover" }}
              />
              <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                {destinations[3].discount}
              </div>
              <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                {destinations[3].location}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
