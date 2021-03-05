import ShowCard from '../../../components/ShowCard/showCard';
import * as showCard from './renderShowCard';
import styles from '../shows.module.css';

export const renderShows = (
  noResults,
  searchResults,
  handleClick,
  handleKeyDown,
  shows
) => {
  const render = (arr) => {
    return (
      <div className={styles.searchResults}>
        {arr.map((show, i) => (
          <div
            className={styles.showContainer}
            style={{ cursor: 'pointer' }}
            key={i}
            onClick={() => handleClick(show)}
            tabIndex="1"
            onKeyDown={(e) => handleKeyDown(e, show)}
          >
            {' '}
            <ShowCard
              show={show}
              alt={`Movie poster of: ${show.name}`}
              image={show.image ? show.image.medium : '/images/noImage.png'}
            >
              {showCard.premiereDate(show)}
              {showCard.rating(show)}
            </ShowCard>
          </div>
        ))}
      </div>
    );
  };

  if (!noResults && searchResults.length) {
    return render(searchResults);
  }
  if (!noResults && !searchResults.length) {
    return render(shows);
  } else {
    return (
      <div className={styles.noResults}>SORRY, NO RESULTS MATCHING QUERY</div>
    );
  }
};
