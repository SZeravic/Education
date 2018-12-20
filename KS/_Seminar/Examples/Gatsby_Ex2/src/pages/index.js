import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import main from "../assets/images/main.png";
import register from "../assets/images/register.png";
import enroll from "../assets/images/enroll.png";
import learn from "../assets/images/learn.png";

export default ({
  data: {
    site: {
      siteMetadata: { title, description }
    }
  }
}) => {
  return (
    <Layout>
      <main id="main">
        <img id="main-img" src={main} />
        <div class="main start">
          <p class="main-p">Start now!</p>
          <div id="main-start-images">
            <img class="main-start-img" src={register} />
            <img class="main-start-img" src={enroll} />
            <img class="main-start-img" src={learn} />
          </div>
        </div>
        <div class="main skills">
          <p class="main-p">Skills</p>
          <div id="main-skills-div">
            <div class="main-skills-list">
              <p class="main-skills-item">Artificial Intelligence</p>
              <p class="main-skills-item">Android Development</p>
              <p class="main-skills-item">iOS Development</p>
              <p class="main-skills-item">Data Analytics</p>
            </div>
            <div class="main-skills-list">
              <p class="main-skills-item">.NET Development</p>
              <p class="main-skills-item">Data Science</p>
              <p class="main-skills-item">Network Security</p>
              <p class="main-skills-item">Front-End Development</p>
            </div>
            <div class="main-skills-list">
              <p class="main-skills-item">Back-End Development</p>
              <p class="main-skills-item">Operating systems</p>
              <p class="main-skills-item">Computing graphics</p>
              <p class="main-skills-item">And many more...</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
