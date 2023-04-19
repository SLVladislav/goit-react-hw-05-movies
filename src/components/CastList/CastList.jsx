import placeholder from '../../Images/placeholder.webp';
import { CastInfo, CastItem, List } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.length > 15
        ? cast.slice(0, 15).map(({ id, character, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CastInfo>
                  <img
                    src={
                      profile_path
                        ? 'https://image.tmdb.org/t/p/w500' + profile_path
                        : placeholder
                    }
                    alt={name}
                  />
                  <p>Character: {character}</p>
                  <p>Name: {name}</p>
                </CastInfo>
              </CastItem>
            );
          })
        : cast.map(({ id, character, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <CastInfo>
                  <img
                    src={
                      profile_path
                        ? 'https://image.tmdb.org/t/p/w500' + profile_path
                        : placeholder
                    }
                    alt={name}
                  />
                  <p>Character: {character}</p>
                  <p>Name: {name}</p>
                </CastInfo>
              </CastItem>
            );
          })}
    </List>
  );
};
