import { useCallback, useEffect, useState } from "react";

// Mirrors the inline pre-paint script: default light, only dark if explicitly chosen.
const isDark = () => document.documentElement.classList.contains("dark");

export function useTheme() {
  const [dark, setDark] = useState(isDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  const toggle = useCallback(() => setDark((d) => !d), []);

  return { dark, toggle };
}
