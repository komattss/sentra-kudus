interface RatingProps {
  rating: number;
  reviews: number;
  size?: "sm" | "md" | "lg";
}

export default function Rating({ rating, reviews, size = "md" }: RatingProps) {
  const stars = Math.round(rating);
  const starSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  return (
    <div className="flex items-center gap-2">
      <div className={`flex gap-1 ${starSize}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < stars ? "⭐" : "☆"}</span>
        ))}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <span className="font-semibold">{rating.toFixed(1)}</span>
        <span> • {reviews} ulasan</span>
      </div>
    </div>
  );
}
