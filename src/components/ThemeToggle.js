import { useEffect, useState } from "react";
import BirdIcon from "./BirdIcon";
import OwlIcon from "./OwlIcon";

const getTheme = () =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const choose = (next) => {
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      <button
        type="button"
        title="early bird (light)"
        aria-label="early bird (light)"
        aria-pressed={theme === "light"}
        onClick={() => choose("light")}
      >
        <BirdIcon />
      </button>
      <button
        type="button"
        title="night owl (dark)"
        aria-label="night owl (dark)"
        aria-pressed={theme === "dark"}
        onClick={() => choose("dark")}
      >
        <OwlIcon />
      </button>
    </div>
  );
}
