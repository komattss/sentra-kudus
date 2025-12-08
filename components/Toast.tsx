"use client";

import { X, CheckCircle, AlertTriangle, XCircle, Bell } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

export default function Toast({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  const closeToast = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => onClose(id), 220);
  }, [id, isExiting, onClose]);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(closeToast, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, closeToast]);

  const toastConfig = {
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      iconColor: "text-green-500",
      icon: CheckCircle,
    },
    warning: {
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      iconColor: "text-yellow-500",
      icon: AlertTriangle,
    },
    error: {
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      iconColor: "text-red-500",
      icon: XCircle,
    },
    info: {
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      iconColor: "text-purple-500",
      icon: Bell,
    },
  };

  const config = toastConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} ${
        config.textColor
      } border-l-4 rounded-xl shadow-lg p-4 mb-3 max-w-md w-full toast-base ${
        isExiting ? "toast-exit" : "toast-enter"
      }`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`${config.iconColor} w-6 h-6 shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm mb-1">{title}</h4>
          <p className="text-sm opacity-90">{message}</p>
        </div>
        <button
          onClick={closeToast}
          className={`${config.iconColor} hover:opacity-70 transition-opacity shrink-0`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
