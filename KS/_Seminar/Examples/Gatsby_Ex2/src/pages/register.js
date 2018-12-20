import React from "react";
import { Layout } from "../components";
import "../styles/register.css";

export default () => (
  <Layout>
    <div id="main-site">
      <p class="register-input-text register-input-row f-name">First name:</p>
      <input class="register-input-box register-input register-input-row f-name" />
      <p class="register-input-text l-name register-input-row">Last name:</p>
      <input class="register-input-box register-input l-name register-input-row" />
      <p class="register-input-text register-input-row date">Date of birth:</p>
      <div class="date register-input-box register-input-row select-div">
        <select class="register-select day register-input-box register-input-row date">
          <option value="01">01</option>
          <option value="02">02</option>
        </select>
        <select class="register-select month register-input-box register-input-row date">
          <option value="01">01</option>
          <option value="02">02</option>
        </select>
        <select class="register-select year register-input-box register-input-row date">
          <option value="1990">1990</option>
          <option value="1991">1991</option>
        </select>
      </div>
      <p class="register-input-text register-input-row email">e-mail:</p>
      <input class="register-input-box register-input register-input-row email" />
      <p class="register-input-text register-input-row username">Username:</p>
      <input class="register-input-box register-input register-input-row username" />
      <p class="register-input-text register-input-row password">Password:</p>
      <input class="register-input-box register-input register-input-row password" />
      <div id="register-button">
        <button id="register-input-button">Register</button>
      </div>
    </div>
  </Layout>
);
