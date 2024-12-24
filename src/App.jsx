import "./App.css";
import { StoreProvider } from "./Store/ContextAPI";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Heroplate from "./Components/Heroplate";
import Services from "./Components/Services";
import Signup from "./Components/Signup";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="bg-bluenavy">
      <StoreProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/loginpage" element={<LoginPage />} />

          {/* Protected Route */}
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
