import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/thunks';

const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const RegistrationPage = lazy(() => import('../../pages/Registration'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegistrationPage} redirectTo="/" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}
