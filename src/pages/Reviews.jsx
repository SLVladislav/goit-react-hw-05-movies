import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Title } from 'components/ReviewsList/ReviewsList.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchReviews } from 'services/fetch-app';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await fetchReviews(id);
        if (reviews.length) {
          setReviews([...reviews]);
          setIsLoaded(true);
        }
      } catch (error) {
        toast.error('We can`t find reviews of this film');
      }
    }
    getReviews();
  }, [id]);

  if (isLoaded) {
    return (
      <section>
        <ReviewsList reviews={reviews} />
      </section>
    );
  } else {
    return <Title>Sorry, there are no reviews for this movie</Title>;
  }
};

export default Reviews;
