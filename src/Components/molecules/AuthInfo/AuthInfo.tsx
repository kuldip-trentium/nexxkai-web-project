import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./AuthInfo.css";
import { AuthInfoProps } from "./AuthInfo.props";
import Spacer from "../../Atoms/Spacer/Spacer";

const AuthInfo: React.FC<AuthInfoProps> = ({ authInfo }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <>
      <div className="auth-info-container d-flex justify-content-center align-items-end w-100 h-100">
        <div className="image-container">
          <img src={authInfo[activeIndex]?.image} alt={"person image"} className="image" />
        </div>

        <Carousel
          controls={false}
          className="carousel-container"
          activeIndex={activeIndex}
          onSelect={handleSelect}>
          {authInfo.map((info, index) => (
            <Carousel.Item key={index} className="info-item">
              <div className="info-container text-center">
                <p className="header-text p-0 m-0">{info.label}</p>
                <Spacer size={4} />
                <p className="title-text p-0 m-0">{info.title}</p>
                <Spacer size={6} />
                <p className="description-carousel-text p-0 m-0">
                  {info.description}
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default AuthInfo;
