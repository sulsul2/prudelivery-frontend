interface StaticStarRatingProps {
    rating: number; // Rating yang ingin ditampilkan
    starSize?: string; // Ukuran bintang (opsional), contoh: '24px', '2em', dst.
  }
  
  const StaticStarRating: React.FC<StaticStarRatingProps> = ({ rating, starSize = '1em' }) => {
    const MAX_STARS = 5; // Jumlah maksimum bintang
  
    const getStarIcon = (index: number): string => {
      return index <= rating ? '★' : '☆';
    };
  
    const starStyle: React.CSSProperties = {
      width: starSize,
      height: starSize
    };
  
    return (
      <div>
        {[...Array(MAX_STARS)].map((_, index) => (
          <span key={index} style={starStyle}>
            {getStarIcon(index + 1)}
          </span>
        ))}
      </div>
    );
  };
  
  export default StaticStarRating;
  