import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Loading from './components/shared/Loaders.jsx';
import { Home, Resume, About, Contact, Projects, Test } from './pages/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/resume",
        element: (
          <Suspense fallback={<Loading />}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/test",
        element: (
          <Suspense fallback={<Loading />}>
            <Test />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;