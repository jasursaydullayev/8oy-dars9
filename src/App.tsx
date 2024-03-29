import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Library from "./pages/Library";
import Login from "./components/Login";
import About from "./pages/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Library />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/about',
      element: <About />
    }

  ])
  return <RouterProvider router={routes} />;
}

export default App;
