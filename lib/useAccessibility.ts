"use client";

import { useState, useEffect } from "react";

export interface AccessibilitySettings {
  fontSize: number;
  isGrayscale: boolean;
  isHighContrast: boolean;
  isDarkMode: boolean;
  textAlign: "left" | "center" | "right" | "justify";
  isSpeechEnabled: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  isGrayscale: false,
  isHighContrast: false,
  isDarkMode: false,
  textAlign: "left",
  isSpeechEnabled: false,
};

export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Load settings from localStorage on mount
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("accessibility-settings");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse accessibility settings:", e);
        }
      }
    }
    return defaultSettings;
  });

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.style.fontSize = `${settings.fontSize}%`;

    // Grayscale
    if (settings.isGrayscale) {
      root.style.filter = "grayscale(100%)";
    } else if (!settings.isHighContrast) {
      root.style.filter = "none";
    }

    // High contrast
    if (settings.isHighContrast) {
      root.classList.add("high-contrast");
      root.style.filter = "contrast(150%) brightness(110%)";
    } else {
      root.classList.remove("high-contrast");
      if (!settings.isGrayscale) {
        root.style.filter = "none";
      }
    }

    // Dark mode
    if (settings.isDarkMode) {
      root.classList.add("dark");
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
    } else {
      root.classList.remove("dark");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }

    // Text align
    document.body.style.textAlign = settings.textAlign;

    // Save to localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const increaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 10, 200),
    }));
  };

  const decreaseFontSize = () => {
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 10, 80),
    }));
  };

  const toggleGrayscale = () => {
    setSettings((prev) => ({ ...prev, isGrayscale: !prev.isGrayscale }));
  };

  const toggleHighContrast = () => {
    setSettings((prev) => ({ ...prev, isHighContrast: !prev.isHighContrast }));
  };

  const toggleDarkMode = () => {
    setSettings((prev) => ({ ...prev, isDarkMode: !prev.isDarkMode }));
  };

  const setTextAlignment = (align: "left" | "center" | "right" | "justify") => {
    setSettings((prev) => ({ ...prev, textAlign: align }));
  };

  const toggleSpeech = () => {
    setSettings((prev) => ({
      ...prev,
      isSpeechEnabled: !prev.isSpeechEnabled,
    }));
  };

  const readText = (text: string) => {
    if (settings.isSpeechEnabled && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "id-ID";
      window.speechSynthesis.speak(utterance);
    }
  };

  const reset = () => {
    setSettings(defaultSettings);
    document.documentElement.style.fontSize = "";
    document.documentElement.style.filter = "";
    document.documentElement.classList.remove("dark", "high-contrast");
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.body.style.textAlign = "";
    localStorage.removeItem("accessibility-settings");
  };

  return {
    settings,
    increaseFontSize,
    decreaseFontSize,
    toggleGrayscale,
    toggleHighContrast,
    toggleDarkMode,
    setTextAlignment,
    toggleSpeech,
    readText,
    reset,
  };
}
