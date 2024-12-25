import "./App.css";
import Store, { StoreProvider } from "./Store/ContextAPI";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Heroplate from "./Components/Heroplate";
import Services from "./Components/Services";
import Signup from "./Components/Signup";
import LoginPage from "./Components/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import ErrorPage from "./Components/ErrorPage";
import Profile from "./Components/Profile";
import Loader from "./Components/Loader";
import { useContext } from "react";

function App() {
  // Create a root route component
  const RootRoute = () => {
    const { isLoading } = useContext(Store);

    if (isLoading) {
      return <Loader />;
    }

    return <Navigate to="/home" replace />;
  };
  return (
    <div className="bg-bluenavy">
      <StoreProvider>
        <Routes>
          <Route path="/" element={<RootRoute />} />

          {/* Public routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/loginpage" element={<LoginPage />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Hero />
                  <Heroplate />
                  <Services />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Profile />
                </>
              </ProtectedRoute>
            }
          />

          {/* Error route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
