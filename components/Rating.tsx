import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews: number;
  size?: "sm" | "md" | "lg";
}

export default function Rating({ rating, reviews, size = "md" }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const starSize =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const textSize =
    size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${starSize} ${
              i < fullStars
                ? "fill-amber-400 text-amber-400"
                : i === fullStars && hasHalfStar
                ? "fill-amber-200 text-amber-400"
                : "fill-none text-gray-300"
            } transition-colors`}
          />
        ))}
      </div>
      <div className={`${textSize} text-gray-600`}>
        <span className="font-semibold text-gray-900">{rating.toFixed(1)}</span>
        <span className="text-gray-500"> ({reviews})</span>
      </div>
    </div>
  );
}
