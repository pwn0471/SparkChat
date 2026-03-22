import { PaletteIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";
import { useState, useRef, useEffect } from "react";

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      {/* TRIGGER BUTTON */}
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <PaletteIcon className="size-5" />
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            right: "10px",
            zIndex: 9999,
            width: "180px",
            maxHeight: "260px",
            overflowY: "auto",
          }}
          className="p-1 shadow-2xl bg-base-200 rounded-2xl border border-base-content/10"
        >
          <div className="space-y-1">
            {THEMES.map((themeOption) => (
              <button
                key={themeOption.name}
                className={`
                  w-full px-3 py-2 rounded-xl flex items-center gap-2 transition-colors
                  ${
                    theme === themeOption.name
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-base-content/5"
                  }
                `}
                onClick={() => {
                  setTheme(themeOption.name);
                  setIsOpen(false);
                }}
              >
                <PaletteIcon className="size-3" />
                <span className="text-xs font-medium">{themeOption.label}</span>
                <div className="ml-auto flex gap-1">
                  {themeOption.colors.map((color, i) => (
                    <span
                      key={i}
                      className="size-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;