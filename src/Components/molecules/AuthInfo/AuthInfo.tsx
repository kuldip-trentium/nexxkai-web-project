import React from "react";
import { Carousel } from "react-bootstrap";
import "./AuthInfo.css";

const AuthInfo = () => {
  return (
    <>
      <div className="auth-info-container">
        <Carousel controls={false} className="carousel-container">
          <Carousel.Item>
            <div className="info-container">
              <text className="header-text">Introducing</text> <br />
              <text className="title-text">VoicerAI</text> <br />
              <text className="description-carousel-text">
                Effortless Call Management for <br /> Individuals and
                Organizations
              </text>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="info-container">
              <text className="header-text">Introducing</text> <br />
              <text className="title-text">VoicerAI</text> <br />
              <text className="description-carousel-text">
                Effortless Call Management for <br /> Individuals and
                Organizations
              </text>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="info-container">
              <text className="header-text">Introducing</text> <br />
              <text className="title-text">VoicerAI</text> <br />
              <text className="description-carousel-text">
                Effortless Call Management for <br /> Individuals and
                Organizations
              </text>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="image-container">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
            className="image"
          />
        </div>
        <div className="footer-container">
          <text className="footer-text">@2024 NeXxKai All Right Reserved.</text>
        </div>
      </div>
    </>
  );
};

export default AuthInfo;
