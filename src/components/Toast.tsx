import { useEffect } from "react";

type ToastProps = {
  message: string;
  show: boolean;
  onClose: () => void;
};

export default function Toast({ message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, 2200);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="
        fixed bottom-4 sm:bottom-6
        left-1/2 -translate-x-1/2
        z-50
        w-[92%] sm:w-auto
        max-w-sm
        animate-in fade-in slide-in-from-bottom-4
      "
    >
      <div
        className="
          relative
          flex items-center gap-3
          px-4 sm:px-5
          py-3
          rounded-2xl
          bg-zinc-900 text-white
          border border-zinc-800
          shadow-2xl
        "
      >
        <div
          className="
            absolute inset-0
            -z-10
            rounded-2xl
            bg-linear-to-r from-purple-500/30 to-pink-500/30
            blur-xl
          "
        />

        <span className="text-lg shrink-0">✅</span>

        <p className="text-sm font-medium leading-snug wrap-break-words">
          {message}
        </p>
      </div>
    </div>
  );
}
