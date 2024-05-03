import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./components/RootLayout";
import MiddleSideBar from "./pages/HomePage/Home-middle/MiddleSideBar";
import Friend from "./pages/Friends/Friend";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route element={<RootLayout />}>
          <Route index element={<MiddleSideBar />} />
          <Route path={"/friends"} element={<Friend />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
