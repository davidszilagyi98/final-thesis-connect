import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Mynetwork from "./pages/Mynetwork";
import Organizations from "./pages/Organizations";
import Profile from "./pages/Profile";
import Signup from "./components/Singup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/userContext";
import Messages from "./pages/Messages";
import UserProfile from "./pages/UserProfile";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/mynetwork"
          element={
            <ProtectedRoute>
              <Mynetwork />
            </ProtectedRoute>
          }
        />
        <Route
          path="/organizations"
          element={
            <ProtectedRoute>
              <Organizations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile/:uid"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
