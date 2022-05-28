import React from "react";
import pimg from "../images/P1.JPG";
import "../styles/components/About.scss";

function About() {
  return (
    <div className="about">
      <figure className="about__img">
        <img src={pimg} alt="me" loading="lazy" />
      </figure>
      <div className="about__personal">
        <h2 className="about__personal__name">Jonathan Valencia</h2>
        <p className="about__personal__description">
          Persona interesada en crecer profesionalmente de manera constante, me
          gusta leer, tallar en madera y dormir
        </p>
      </div>
      <div className="about__learn">
        <h3>Aprendizaje en MIR camp</h3>
        <ul>
          <li>Saas</li>
          <li>React - Hooks </li>
          <li>React - Api Context</li>
          <li>Express</li>
        </ul>
      </div>

      <div className="about__contact">
        <p>Email: jonathanvaro1004@gmail.com</p>
        <p>
          Github:{" "}
          <a href="https://github.com/nathanvr">https://github.com/nathanvr</a>{" "}
        </p>
      </div>
    </div>
  );
}
export default About;
