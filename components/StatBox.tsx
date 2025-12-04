interface StatBoxProps {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export default function StatBox({ label, value, icon, color }: StatBoxProps) {
  return (
    <div
      className={`${color} rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-shadow`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm text-white text-opacity-80 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
