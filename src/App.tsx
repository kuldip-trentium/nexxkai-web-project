import "./App.css";
import LoginScreen from "./Components/Screens/LoginScreen/LoginScreen";
import SignUpScreen from "./Components/Screens/LoginScreen/SignUpScreen/SignUpScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginScreen} />
        <Route path="/sign-up" Component={SignUpScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
