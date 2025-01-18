import React from "react"
import Hero from '../assets/Components/Hero'
import Services from '../assets/Components/Services'
import About from "../assets/Components/About"
import Footer from "../assets/Components/Footer"

function Home(){
    return(
        <div>
            <Hero/>
            <About/>
            <Services/>
            {/* <Contact/> */}
            <Footer/>
        </div>
    )
}

export default Home;