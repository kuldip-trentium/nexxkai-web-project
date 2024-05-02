import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  zipCode: Yup.string()
    .matches(/^[0-9a-zA-Z]{6}$/, "Zip code must be 6 characters")
    .required("Zip code is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain at least one uppercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .test("email-format", "Invalid email address", (value) => {
      if (!value) return true; // Allow empty values (handled by "required" above)
      return Yup.string().email().isValidSync(value);
    }),
  password: Yup.string()
    .required("Password is required")
    .test(
      "password-format",
      "Password must be at least 8 characters and contain at least one uppercase letter, one number, and one special character",
      (value) => {
        if (!value) return true; // Allow empty values (handled by "required" above)
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(value);
      }
    ),
});
