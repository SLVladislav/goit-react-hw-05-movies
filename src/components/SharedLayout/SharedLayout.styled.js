import styled from '@emotion/styled';

import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  margin-bottom: 16px;
  color: #f1f1f1;
  background-color: #dbdbdb;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: #161616;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #f1f1f1;
    background-color: #686868;
  }
  &:hover {
    color: #f1f1f1;
    background-color: #686868;
  }
`;

export const Title = styled.h1`
  margin-bottom: 18px;
  color: #161616;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  color: #161616;
  background-color: #dbdbdb;
  border-radius: 20px;
  display: inline-block;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #f1f1f1;
    background-color: #686868;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 18px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 12px;
  font-size: 20px;
`;
