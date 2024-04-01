import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import {Home, Resume, About, Contact, Projects, Test} from './pages/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default router
