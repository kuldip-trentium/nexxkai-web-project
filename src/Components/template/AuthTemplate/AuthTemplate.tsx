import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AuthTemplate.css";
import AuthInfo from "../../molecules/AuthInfo/AuthInfo";
import Spacer from "../../Atoms/Spacer/Spacer";
import { AuthTemplateProps } from "./AuthTemplateProps";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  description,
  authInfo,
  FormComponent,
  noBack,
}) => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row className="auth-row">
        <Col
          md={6}
          className="left-column col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-start align-items-center flex-column">
          <div className="logo-view">
            <img src={logo} height={20} width={100} alt="logo" />
          </div>
          <div className="left-column-view">
            {!noBack && (
              <>
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-outline-none p-0">
                  <IoArrowBackSharp className="back-btn" />
                </button>
                <Spacer size={16} />
              </>
            )}
            <p className="heading-text p-0 m-0">{title}</p>
            <p className="description-text p-0 m-0">{description}</p>
            <Spacer size={32} />
            {FormComponent && <FormComponent />}
          </div>
        </Col>
        <Col
          md={6}
          className="right-column col-md-12 col-lg-6 col-xl-6 col-xxl-6  ">
          <div className="right-info-view h-100">
            <AuthInfo authInfo={authInfo} />
          </div>
          <p className="footer-text text-center">
            @2024 NeXxKai All Right Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthTemplate;
