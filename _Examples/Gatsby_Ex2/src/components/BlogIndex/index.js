import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import image from "../../assets/images/computer.jpg";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, date, slug } = post.node.frontmatter;
    return (
      <section key={id} className={styles.Post}>
        <Link to={`blog/${slug}`}>
          <img className={styles.Image} src={image}></img>
          <h2 className={styles.Title}>
            {title}
          </h2>
        </Link>
        <p className={styles.Excerpt}>{excerpt}</p>
        <Link className={styles.Link_more} to={`blog/${slug}`}>Read more</Link>
      </section>
    );
  });
  return postsList;
};
