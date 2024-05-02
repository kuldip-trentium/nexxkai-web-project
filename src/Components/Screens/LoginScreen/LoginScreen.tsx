import React from "react";
import AuthTemplate from "../../template/AuthTemplate/AuthTemplate";
import LoginForm from "../../organism/LoginForm/LoginForm";
import { authInfoData } from "../../../utils/constants/constant";
import background from "../../../Assets/images/background.png";

const LoginScreen = () => {
  return (
    <AuthTemplate
      title="Welcome to NeXxKai"
      description="Login to your account"
      FormComponent={LoginForm}
      authInfo={authInfoData}
      image={background}
      noBack
    />
  );
};

export default LoginScreen;
