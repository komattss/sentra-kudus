interface BadgeProps {
  text: string;
  color?: "blue" | "green" | "red" | "yellow" | "purple";
  size?: "sm" | "md" | "lg";
}

export default function Badge({
  text,
  color = "blue",
  size = "md",
}: BadgeProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    purple: "bg-purple-100 text-purple-800",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  return (
    <span
      className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full font-medium inline-block`}
    >
      {text}
    </span>
  );
}
