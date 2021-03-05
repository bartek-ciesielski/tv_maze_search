import Icon from '../../../components/Icon/icon.jsx';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const premiereDate = (show) => {
  return show.premiered ? show.premiered.slice(0, 4) : '';
};
export const rating = (show) => {
  return show.rating.average ? (
    <span>
      <Icon icon={faStar} color={'yellow'} /> {show.rating.average}
    </span>
  ) : (
    <span>not rated</span>
  );
};
