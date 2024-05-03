import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./LoginForm.css";
import { Formik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spacer from "../../Atoms/Spacer/Spacer";
import { loginValidationSchema } from "../../../utils/Validations/validation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="login-form-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
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
              <p className="form-labels pb-1 m-0">Email</p>
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
              <p className="form-labels pb-1 m-0">Password</p>
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
                  className={`eye-button ${
                    errors.password && touched.password ? "error-occurred" : ""
                  }`}
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="eyr-icon p-0 m-0" />
                  ) : (
                    <AiOutlineEye className="eye-icon p-0 m-0" />
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
                <a href="/sign-up" className="forgot-text">
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
