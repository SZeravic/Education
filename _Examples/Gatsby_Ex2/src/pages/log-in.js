import React from "react";
import {Link} from "gatsby";
import { Layout } from "../components";
import "../styles/log-in.css";

export default () => (
  <Layout>
    <main id="main">
      <div id="main-input">
        <p class="main-input-username main-input-p">Username:</p>
        <input class="main-input-username main-input-box" />
        <p class="main-input-password main-input-p">Password:</p>
        <input class="main-input-password main-input-box" />
        <button id="main-input-button">Log In</button>
      </div>
      <div id="main-register">
        <p id="main-register-p">Don't have an acconut?</p>
        <Link to="register">Register</Link>
      </div>
    </main>
  </Layout>
);
