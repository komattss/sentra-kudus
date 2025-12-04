interface LoadingProps {
  text?: string;
}

export default function Loading({ text = "Memuat..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin">
        <div className="text-4xl">⏳</div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  );
}
