"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "podium-lab-theme";

function applyThemeClass(t: Theme) {
  const html = document.documentElement;
  html.classList.toggle("dark", t === "dark");
  html.classList.toggle("light", t === "light");
  html.style.colorScheme = t;
}

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Read whatever the FOUC-prevention script (in <head>) already applied.
    const html = document.documentElement;
    const initial: Theme = html.classList.contains("light") ? "light" : "dark";
    setThemeState(initial);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    applyThemeClass(t);
    try {
      window.localStorage.setItem(STORAGE_KEY, t);
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggle }),
    [theme, setTheme, toggle]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Safe fallback during SSR / outside provider
    return {
      theme: "dark" as Theme,
      setTheme: () => {},
      toggle: () => {},
    };
  }
  return ctx;
}

/** Inline script to set the theme class BEFORE first paint (FOUC prevention). */
export const themeInitScript = `
(function(){try{
  var k='${STORAGE_KEY}';
  var t=localStorage.getItem(k);
  if(t!=='light'&&t!=='dark'){
    t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
  }
  var h=document.documentElement;
  h.classList.toggle('dark',t==='dark');
  h.classList.toggle('light',t==='light');
  h.style.colorScheme=t;
}catch(e){}})();
`.trim();
