import React from 'react'
import Hero from"../Components/Sections/Hero";
import Section2 from"../Components/Sections/Section2";
import Section3 from"../Components/Sections/Section3";
import Section4 from"../Components/Sections/Section4";

const Home = () => {
    return (
        <>
            {/*HERO*/}
            <Hero />

            {/*SECTION 2*/}
            <Section2 />

            {/*SECTION 3*/}
            <Section3 />
            
            {/*SECTION 4*/}
            <Section4 />
        </>
    )
}

export default Home
