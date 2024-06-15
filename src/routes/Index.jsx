//import react router dom
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import Dashboard from "../views/Admin/Dashboard/Index";

export default function RoutesIndex() {
  return (
    <Routes>
    
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
