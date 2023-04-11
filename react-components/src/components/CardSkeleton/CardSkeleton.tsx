import Skeleton from 'react-loading-skeleton';
import './CardSkeleton.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  return (
    <div className="skeleton">
      {[1, 2, 3, 4, 5].map((n) => (
        <div className="skeleton-card" key={n}>
          <Skeleton className="skeleton-img" />
          <Skeleton className="skeleton-text" count={3} />
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
