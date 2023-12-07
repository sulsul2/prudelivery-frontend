import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/page";
import ListResto from "./pages/listResto/page";
import ProductResto from "./pages/productResto/page";
import Register from "./pages/register/page";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const ProtectedRoute = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<ListResto />} />
        <Route path="/menu" element={<ProductResto />} />
      </Route>
    </Routes>
  );
}
