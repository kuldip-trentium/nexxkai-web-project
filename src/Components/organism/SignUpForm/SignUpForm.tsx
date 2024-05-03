import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import "../LoginForm/LoginForm.css";
import Spacer from "../../Atoms/Spacer/Spacer";
import "./SignUpForm.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signUpValidationSchema } from "../../../utils/Validations/validation";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  zipCode: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = (values: any) => {
    console.log(values, "values");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div className="form-container">
            <Form.Group controlId="email">
              <p className="form-labels pb-1 m-0">Email</p>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!(touched.email && errors.email)}
                className="custom-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Spacer size={8} />
            <Form.Group controlId="fullName">
              <p className="form-labels pb-1 m-0">Full Name</p>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!(touched.fullName && errors.fullName)}
                className="custom-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>

            <Spacer size={8} />
            <Form.Group controlId="phoneNumber">
              <p className="form-labels pb-1 m-0">Phone Number</p>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!(touched.phoneNumber && errors.phoneNumber)}
                className="custom-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Spacer size={8} />
            <Form.Group controlId="zipCode">
              <p className="form-labels pb-1 m-0">Zip Code</p>
              <Form.Control
                type="text"
                name="zipCode"
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!(touched.zipCode && errors.zipCode)}
                className="custom-input"
              />
              <Form.Control.Feedback type="invalid">
                {errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>
            <Spacer size={8} />
            <Form.Group controlId="password">
              <p className="form-labels pb-1 m-0">Password</p>
              <div className="password-field-input">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!(touched.password && errors.password)}
                  className="custom-input"
                />

                <Button
                  variant="link"
                  onClick={togglePasswordVisibility}
                  className={`eye-button ${
                    errors.password ? "error-occurred" : ""
                  }`}
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible style={{ color: "gray" }} />
                  ) : (
                    <AiOutlineEye style={{ color: "gray" }} />
                  )}
                </Button>

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Spacer size={8} />
            <Form.Group controlId="confirmPassword">
              <p className="form-labels pb-1 m-0">Confirm Password</p>
              <div className="password-field-input">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={
                    !!(touched.confirmPassword && errors.confirmPassword)
                  }
                  className="custom-input"
                />

                <Button
                  variant="link"
                  onClick={toggleConfirmPasswordVisibility}
                  className={`eye-button ${
                    errors.confirmPassword ? "error-occurred" : ""
                  }`}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }>
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible className="eye-icon p-0 m-0" />
                  ) : (
                    <AiOutlineEye className="eye-icon p-o m-0" />
                  )}
                </Button>

                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </div>
          <Button
            className={`w-100 sign-in-btn${!isValid ? "-invalid-btn" : ""}`}
            type="submit"
            disabled={isSubmitting}>
            Create Account
          </Button>
          <Spacer size={24} />
          <div className="register-container">
            <p className="register-text">
              By creating an account or signing you agree to our <br />
              <a href="/sign-up" className="forgot-text">
                Terms and Conditions
              </a>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
