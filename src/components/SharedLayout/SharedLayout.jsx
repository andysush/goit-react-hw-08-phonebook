import { AppBar } from 'components/AppBar/AppBar';
import FooterBar from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <FooterBar />
    </>
  );
};
