import React from "react";
import SiteContainer from "./SiteContainer";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";
/* eslint-disable */

export default () => (
    
    <SiteContainer>
        <p>Entering .SiteContainer</p>
        <div class="site">
            <Header/>
            <Section/>
            <Main/>
            <Aside/>
            <Footer/>
        </div>
        <p> Exiting .SiteContainer</p>
    </SiteContainer>    
);