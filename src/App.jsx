import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./components/RootLayout";
import MiddleSideBar from "./pages/HomePage/Home-middle/MiddleSideBar";
import FriendContainer from "./pages/Friends/FriendContainer";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";
import DetailPost from "./pages/HomePage/Home-middle/Post/detail/DetailPost";
import FriendLayout from "./pages/Friends/FriendLayout";

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
        </Route>
        <Route
          path="/photo/:id"
          element={authUser ? <DetailPost /> : <Navigate to="/login" />}
        />
        <Route element={authUser ? <FriendLayout /> : <Navigate to="/login" />}>
          <Route
            path="/friends"
            element={authUser ? <FriendContainer /> : <Navigate to="/login" />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
