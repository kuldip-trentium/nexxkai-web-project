import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AuthTemplate.css";
import LoginForm from "../../organism/LoginForm/LoginForm";
import AuthInfo from "../../molecules/AuthInfo/AuthInfo";

const AuthTemplate = () => {
  return (
    <Container fluid className="auth-container">
      <Row className="auth-row">
        <Col md={6} className="left-column">
          <div className="left-column-view">
            <text className="heading-text">Welcome to NexxKai</text> <br />
            <text className="description-text">Login to your account</text>
            <LoginForm />
          </div>
        </Col>
        <Col md={6} className="right-column">
          <div className="right-info-view">
            <AuthInfo />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthTemplate;
