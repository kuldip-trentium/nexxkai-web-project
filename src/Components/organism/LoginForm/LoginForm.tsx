import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./LoginForm.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spacer from "../../Atoms/Spacer/Spacer";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="login-form-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values, "values");
        }}>
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          isSubmitting,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <text className="form-labels">Email</text>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                className="custom-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Spacer size={8} />
            <Form.Group controlId="formBasicPassword">
              <text className="form-labels">Password</text>
              <div className="password-field-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  className="custom-input"
                />
                <Button
                  variant="link"
                  onClick={togglePasswordVisibility}
                  className="eye-button"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible style={{ color: "gray" }} />
                  ) : (
                    <AiOutlineEye style={{ color: "gray" }} />
                  )}
                </Button>
                <Form.Control.Feedback type="invalid">
                  {touched.password && errors.password}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Spacer size={12} />
            <a href="/forgot-password" className="forgot-text">
              Forgot Password?
            </a>
            <Button
              type="submit"
              className={`w-100 sign-in-btn${!isValid ? "-invalid-btn" : ""}`}>
              Sign In
            </Button>
            <Spacer size={24} />
            <div className="register-container">
              <text className="register-text">
                Don't have an account?{" "}
                <a href="/register" className="forgot-text">
                  Register
                </a>
              </text>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
