import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";

const MissingRoute = () => null;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <MissingRoute />,
    loader() {
      throw new Response("Not Found", { status: 404 });
    },
    hydrateFallbackElement: <MissingRoute />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App