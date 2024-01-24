import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./pages/Header";
import { ClickContextProvider } from "./context/ClickContext";

function App() {
  return (
    <ClickContextProvider>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </ClickContextProvider>
  );
}

export default App;
