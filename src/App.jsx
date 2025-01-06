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
import CityList from "./components/CityItem/CityList";
import { useEffect, useState } from "react";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "app", element: <AppLayout /> },
//   { path: "product", element: <Product /> },
//   { path: "pricing", element: <Pricing /> },
//   { path: "login", element: <Login /> },
//   { path: "*", element: <PageNotFound /> },
// ]);
const API_URL = `http://localhost:6969`;
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/cities`, {
          signal: controller.signal,
        });
        if (!res.ok)
          throw new Error("Something went wrong, Please try again later!");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
    return function () {
      controller.abort();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
}
