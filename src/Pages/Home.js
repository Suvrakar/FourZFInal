import React from 'react'
import Hero from "../Components/Hero/Hero"
import Services from "../Components/Services/Services"
import LatestProject from "../Components/LatestProject/LatestProject"
import Experience from "../Components/Experience/Experience"
import Partners from "../Components/Partners/Partners"
import { Helmet } from 'react-helmet';
import Slider from '../Components/Slider/Slider';


export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | 4z International</title>
            </Helmet>
      
            <Slider>
            
            </Slider>
            <br></br>
            <Services></Services>
            <LatestProject></LatestProject>
            <Experience></Experience>
            <Partners></Partners>



        </div>
    )
}
