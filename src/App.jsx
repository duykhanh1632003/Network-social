import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./pages/Header";
import { ClickContextProvider } from "./context/ClickContext";
import HomePage from "./pages/HomePage/HomePage";

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
