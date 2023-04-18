// import { ThemeProvider } from 'styled-component';
import { GlobalStyle, nptheme } from 'components/GlobalStyle.styled';
import { Container, Header, StyledNavLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
};
