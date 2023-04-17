import { Review, Reviewinfo, ReviewsInfo, Title } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsInfo>
      {reviews.map(({ id, author, content }) => {
        return (
          <Review key={id}>
            <Title>
              Author name: <Reviewinfo>{author}</Reviewinfo>
            </Title>
            <Title>
              Review: <Reviewinfo>{content}</Reviewinfo>
            </Title>
          </Review>
        );
      })}
    </ReviewsInfo>
  );
};
