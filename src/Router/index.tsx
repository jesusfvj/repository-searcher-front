import { Route, Routes } from "react-router-dom";
import { ScrollTop } from "../components/base/ScrollTop";
import { Dashboard } from "../pages/Dashboard";
import { LandingPage } from "../pages/LandingPage";
import { UserPage } from "../pages/UserPage";
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
        <Route path="/*" element={
          <ProtectedRoute>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user" element={<UserPage />}>
                <Route path=":userId" element={<UserPage />} />
              </Route>
            </Routes>
          </ProtectedRoute>
        }
        />
      </Routes>{""}
    </>
  )
}

export default Router;

