import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
const App=()=>{
  const router= createBrowserRouter([
    {
      path:"/",
      errorElement:<ErrorPage/>,
      element:<Home/>
    }
  ]);
  return <RouterProvider router={router}/>
}

export default App