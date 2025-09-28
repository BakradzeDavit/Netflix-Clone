import Star from "./Starr";
function Rating({ rating }) {
  const result = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      result.push(<Star key={i} width={100} />);
    } else if (rating > 0) {
      result.push(<Star key={i} width={rating * 100} />);
    } else {
      result.push(<Star key={i} width={0} />);
    }

    rating -= 1; 
  }
  return <div className="flex">{result}</div>;
}

export default Rating;
