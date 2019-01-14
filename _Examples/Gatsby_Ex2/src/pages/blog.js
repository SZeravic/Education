import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogIndex } from "../components";
import "../styles/blog.css";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <Layout>
      <div id="blog-filter">
          <p class="blog-text blog-filter-p">Topic:</p>
          <select id="blog-select">
            <option value="Android Development">Android Development</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
          </select>
        </div>
      <BlogIndex posts={posts} />
      <div id="blog-pages">
          <p class="blog-text blog-page-label">Page 1/5</p>
          <select id="blog-page-select">
            <option selected disabled>Jump to...</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
