import React from "react";
import { Layout } from "../components";
import "../styles/about.css";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import github from "../assets/images/github.png";

export default () => (
  <Layout>
    <main id="main">
        <p class="about-p about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi
          velit eaque veniam praesentium nesciunt blanditiis possimus quia
          quibusdam inventore, quam iusto hic eos harum deleniti earum a quas
          consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Laboriosam repudiandae necessitatibus quia eligendi possimus odio,
          veritatis quam quibusdam ea exercitationem. Accusamus incidunt porro
          autem temporibus labore facere iure cum ad. Laboriosam repudiandae
          necessitatibus quia eligendi possimus odio, veritatis quam quibusdam
          ea exercitationem. Accusamus incidunt porro autem temporibus labore
          facere iure cum ad.
        </p>
        <h3 class="main-heading">Special thanks go to these webpages:</h3>
        <div class="about-p links">
          <a href="https://unsplash.com" target="_blank"
            ><p class="link link1">Unsplash</p></a
          >
          <a href="https://cooltext.com" target="_blank"
            ><p class="link">Cooltext</p></a
          >
        </div>
        <h3 class="main-heading">Find us on social networks:</h3>
        <div class="main-div images">
          <a href="https://www.facebook.com" target="_blank"
            ><img class="icon" src={facebook}
          /></a>
          <a href="https://www.twitter.com" target="_blank">
            <img class="icon" src={twitter}
          /></a>
          <a href="https://www.youtube.com" target="_blank">
            <img class="icon" src={youtube}
          /></a>
          <a href="https://www.github.com" target="_blank">
            <img class="icon" src={github}
          /></a>
        </div>
        <h3 class="main-heading">Contact:</h3>
        <p class="about-p email">quick_courses@email.com</p>
      </main>
  </Layout>
);
