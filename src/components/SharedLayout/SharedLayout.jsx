import { Container, Header, StyledNavLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MyGlobalStyles } from '../GlobalStyle.styled';

export const SharedLayout = () => {
  return (
    <div>
      <MyGlobalStyles />
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies"> Movies</StyledNavLink>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={1500} hideProgressBar={true} />
      </Container>
    </div>
  );
};
