import React, { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Loading from './components/Loading.jsx';
const Header = React.lazy(() => import('../Header/Header.jsx'));
const Footer = React.lazy(() => import('../Footer/Footer.jsx'));

const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Suspense>
  );
};

export default Layout;