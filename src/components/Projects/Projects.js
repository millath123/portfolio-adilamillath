import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import qr_code from "../Projects/qr-code-generater.png";
import smarthome from "../Projects/smartHome_homePage.png";
import suicide from "../../Assets/Projects/suicide.png";
import calendar from "../Projects/colonder_events.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smarthome}
              isBlog={false}
              title="smatHome"
              description="SmartHome is an advanced e-commerce platform for smart home products, powered by Node.js, Express, and MongoDB. It features robust search and navigation, secure Razorpay payments, and admin control over users, banners, brands, products, and orders. Enhanced with Google authentication, Firebase OTP, and hosted on AWS EC2 with Nginx via Cloudflare, it includes Node Mailer for automated emails, Bcrypt for security, Twilio for communications, Cloudinary for image storage, and session cart management for smooth shopping experiences."
              ghLink="https://github.com/millath123/SmartHome"
              demoLink="https://smartt.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="React Calender Events App"
              description="This React-based calendar app allows users to effortlessly view, add, edit, and remove events. Users can navigate between months with ease, add events by clicking on a date, and have their schedule automatically saved to local storage. The app also features viewing, adding, liking, and commenting on posts, checking notifications, and updating profile pictures, providing a comprehensive and intuitive scheduling experience"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr_code}
              isBlog={false}
              title="React QR Code Generater"
              description="Crafted a dynamic QR code generator application using React, empowering users to swiftly generate QR codes for various purposes. The app provides a streamlined user experience, allowing instant generation of QR codes for URLs and text with immediate visual feedback. It supports CRUD operations for tasks, utilizing MongoDB for efficient data management, and features a responsive design for optimal use across devices."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
