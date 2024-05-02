import React from "react";
import AuthTemplate from "../../../template/AuthTemplate/AuthTemplate";
import { authInfoData } from "../../../../utils/constants/constant";
import SignUpForm from "../../../organism/SignUpForm/SignUpForm";
import background from "../../../../Assets/images/background.png";

const SignUpScreen = () => {
  return (
    <AuthTemplate
      title={"Create Account"}
      description="Let’s  setup your account"
      authInfo={authInfoData}
      FormComponent={SignUpForm}
      image={background}
    />
  );
};

export default SignUpScreen;
