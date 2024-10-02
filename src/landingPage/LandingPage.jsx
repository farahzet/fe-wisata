import { Hero } from "../component/hero/Hero"
import { NavLandingPage } from "../component/navbar/NavLandingPage"
import { CardPlace } from "../component/CardPlace/CardPlace"
import Banner from "../assets/banner.jpeg"
import "./landingPage.css"
import { CardFood } from "../component/CardPlace/CardFood"

export const LandingPage = () => {
    return(
        <>
        <div 
            className="hero-container" 
            // style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            <NavLandingPage />
            <main className='mt-md-5 mt-xl-0'>
                <Hero 
                    idSection={'mainHero'}
                    heading="Time To Trip"
                    text="Temukan Destinasi Wisata Anda Disini, Rasakan Kebahagiaan Tiada Tara di Setiap Tujuan Wisata!  "
                />
            </main>
            
        </div>
        <CardPlace />
        <CardFood />

            
        </>
    )
}