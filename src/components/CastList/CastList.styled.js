import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CastItem = styled.li`
  width: calc((100% - 80px) / 5);
`;

export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${props => props.theme.black};
`;
