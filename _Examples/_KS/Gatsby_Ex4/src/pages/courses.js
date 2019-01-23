import React from "react";
import { Layout } from "../components";
import "../styles/courses.css";
import mobile from "../assets/images/mobile.jpg";
import mobile2 from "../assets/images/mobile2.jpg";
import code from "../assets/images/code.jpg";
import computer from "../assets/images/computer.jpg";

export default () => (
  <Layout>
    <div id="courses-main-input">
      <p class="courses-input-p courses-input-row search-p text search">
        Search course:
      </p>
      <div class="search-bar main-input-box search courses-input-row">
        <input class="search-box text" />
        <p id="search-button">&#128269;</p>
      </div>
      <p class="courses-input-p courses-input-row skills-p text">
        Filter by skills:
      </p>
      <select class="select main-input-box courses-input-row text">
        <option value="01">Android Development</option>
        <option value="02">Artificial Intelligence</option>
      </select>
      <p class="courses-input-p courses-input-row difficulty-p text">
        Filter by difficulty:
      </p>
      <select class="select main-input-box courses-input-row text">
        <option value="01">Basic</option>
        <option value="02">Intermediate</option>
        <option value="02">Advanced</option>
      </select>
    </div>
    <h3 class="main-results big-text">Results</h3>
    <div id="results-grid">
      <p class="left-arrow arrow">&#10094;</p>
      <div id="main-articles">
        <article class="article-div">
          <img class="article-img" src={mobile} />
          <h3>
            <a class="article-h big-text" href="index2.html">
              Android basics
            </a>
          </h3>
          <p class="article-difficulty text">Basic</p>
          <p class="article-p text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            illo ipsam natus unde asperiores mollitia eligendi quia, blanditiis
            sit esse, facere nobis cum vero aperiam minus, voluptatibus quod
            neque eaque.
          </p>
        </article>
        <article class="article-div">
          <img class="article-img" src={mobile2} />
          <h3>
            <a class="article-h big-text" href="index2.html">
              Android intents and services
            </a>
          </h3>
          <p class="article-difficulty text">Intermediate</p>
          <p class="article-p text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            illo ipsam natus unde asperiores mollitia eligendi quia, blanditiis
            sit esse, facere nobis cum vero aperiam minus, voluptatibus quod
            neque eaque.
          </p>
        </article>
        <article class="article-div">
          <img class="article-img" src={code} />
          <h3>
            <a class="article-h big-text" href="index2.html">
              Android geolocations
            </a>
          </h3>
          <p class="article-difficulty text">Advanced</p>
          <p class="article-p text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            illo ipsam natus unde asperiores mollitia eligendi quia, blanditiis
            sit esse, facere nobis cum vero aperiam minus, voluptatibus quod
            neque eaque.
          </p>
        </article>
        <article class="article-div">
          <img class="article-img" src={computer} />
          <h3>
            <a class="article-h big-text" href="index2.html">
              Android layout
            </a>
          </h3>
          <p class="article-difficulty text">Basic</p>
          <p class="article-p text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            illo ipsam natus unde asperiores mollitia eligendi quia, blanditiis
            sit esse, facere nobis cum vero aperiam minus, voluptatibus quod
            neque eaque.
          </p>
        </article>
      </div>
      <p class="right-arrow arrow">&#10095;</p>
    </div>
    <div id="pages">
      <p class="page-label text">Page 1/5</p>
      <select class="page-select text">
        <option selected disabled>
          Jump to...
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  </Layout>
);
