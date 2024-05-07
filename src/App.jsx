import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./components/RootLayout";
import MiddleSideBar from "./pages/HomePage/Home-middle/MiddleSideBar";
import Friend from "./pages/Friends/Friend";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";
import DetailPost from "./pages/HomePage/Home-middle/Post/detail/DetailPost";

function App() {
  const { authUser } = useAuthContext();
  useEffect(() => {
    console.log("check auth", authUser);
  }, []);
  return (
    <main>
      <Routes>
        {/* Public routes */}
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <SignIn /> : <Navigate to="/" />}
        />

        {/* Private routes */}
        <Route element={authUser ? <RootLayout /> : <Navigate to="/login" />}>
          <Route index element={<MiddleSideBar />} />
          <Route path="/friends" element={<Friend />} />
        </Route>
        <Route
          path="/photo/:id"
          element={authUser ? <DetailPost /> : <Navigate to="/login" />}
        />
      </Routes>
    </main>
  );
}

export default App;
