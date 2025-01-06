import {
  BrowserRouter,
  Routes,
  Route,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import HomePage from "./pages/Home/Homepage";
import PageNotFound from "./pages/NotFound/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "app", element: <AppLayout /> },
//   { path: "product", element: <Product /> },
//   { path: "pricing", element: <Pricing /> },
//   { path: "login", element: <Login /> },
//   { path: "*", element: <PageNotFound /> },
// ]);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
}
