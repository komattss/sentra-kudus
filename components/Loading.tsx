interface LoadingProps {
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({
  text = "Memuat...",
  fullScreen = false,
}: LoadingProps) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-linear-to-br from-slate-50 via-white to-slate-50 flex flex-col items-center justify-center z-50 overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Animated gradient circles */}
          <div className="relative w-40 h-40 mb-12">
            {/* Red circle */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-red-400 animate-spin"
              style={{ animationDuration: "2s" }}
            />

            {/* Yellow circle */}
            <div
              className="absolute inset-2 rounded-full border-4 border-transparent border-t-yellow-500 border-r-yellow-400 animate-spin"
              style={{ animationDuration: "3s", animationDirection: "reverse" }}
            />

            {/* Green circle */}
            <div
              className="absolute inset-4 rounded-full border-4 border-transparent border-t-green-500 border-r-green-400 animate-spin"
              style={{ animationDuration: "1.5s" }}
            />

            {/* Blue circle */}
            <div
              className="absolute inset-6 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"
              style={{
                animationDuration: "2.5s",
                animationDirection: "reverse",
              }}
            />

            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-linear-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full animate-pulse shadow-lg" />
            </div>
          </div>

          {/* Text */}
          <p className="text-xl font-bold text-slate-800 tracking-wide mb-2">
            {text}
          </p>

          {/* Subtitle */}
          <p className="text-sm text-slate-500 mb-8">
            Jangan menutup halaman ini
          </p>

          {/* Animated dots */}
          <div className="flex gap-3">
            <div
              className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.15s" }}
            />
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.45s" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Mini version for inline loading */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-blue-500 animate-spin" />
        <div
          className="absolute inset-1 rounded-full border-3 border-transparent border-t-red-500 animate-spin"
          style={{ animationDirection: "reverse" }}
        />
      </div>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}
