import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Layout, Shirt } from "./features";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shirt",
          element: <Shirt/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
