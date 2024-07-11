import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Adila Millath C</span>
        from <span className="purple">Malappuram, Kerala, India.</span>
        <br />
        I am currently working as an intern MERN stack developer at Self Stack Hub LLP, Calicut.
        <br />
        <br />
        I specialize in web development with skills in:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> JavaScript
        </li>
        <li className="about-activity">
          <ImPointRight /> Node.js
        </li>
        <li className="about-activity">
          <ImPointRight /> Express.js
        </li>
        <li className="about-activity">
          <ImPointRight /> React
        </li>
        <li className="about-activity">
          <ImPointRight /> MongoDB
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Strive to build things that make a difference!"{" "}
      </p>
      <footer className="blockquote-footer">Adila Millath</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
