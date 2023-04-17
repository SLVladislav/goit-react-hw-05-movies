import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${props => props.theme.black};
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
`;
export const ReviewsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Review = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid ${props => props.theme.black};
  padding-bottom: 8px;
`;

export const Reviewinfo = styled.span`
  font-weight: 400;
`;
