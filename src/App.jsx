import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import Header from "./pages/HomePage/Header";
import { ClickContextProvider } from "./context/ClickContext";
import HomePage from "./pages/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ClickContextProvider>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route index element={<HomePage />} />
      </Routes>
    </ClickContextProvider>
  );
}

export default App;
