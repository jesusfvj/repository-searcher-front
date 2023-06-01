import { Route, Routes } from "react-router-dom";
import { ScrollTop } from "../components/base/ScrollTop";
import { Dashboard } from "../pages/Dashboard";
import { LandingPage } from "../pages/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";


  function Router() {
    return (
      <>
      <ScrollTop />
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Routes>
                <Route path="/" element={<LandingPage />} />
              </Routes>
            </PublicRoute>
          }
          />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </ProtectedRoute>
          }
          />
        </Routes>{""}
      </>
    )
  }

export default Router;

