import { useContext } from 'react';
import { AppContext } from 'App/AppContext';
import { Moon, Sun } from 'icons';
import 'styles/toggle.css';

export const Toggle = () => {
  const { theme, setTheme } = useContext(AppContext);
  const isDark = theme === 'dark';
  const ariaLabel = `Currently in ${
    isDark ? 'dark' : 'light'
  } mode, switch to ${!isDark ? 'dark' : 'light'} mode`;
  const toggleDescriptionId = 'toggle-description';

  return (
    <div className="toggle-container">
      <span className="toggle-visually-hidden" id={toggleDescriptionId}>
        Switch between dark and light mode for visual comfort.
      </span>
      <input
        className="toggle-input"
        data-v2="toggle"
        id="toggle"
        name="toggle"
        type="checkbox"
        checked={isDark}
        aria-label={ariaLabel}
        aria-describedby={toggleDescriptionId}
        onChange={({ target: { checked } }) => {
          const key = checked ? 'dark' : 'light';
          localStorage.setItem('theme', key);
          setTheme(key);
        }}
      />
      <label className="toggle-switch" htmlFor="toggle">
        <span className="toggle-visually-hidden">{ariaLabel}</span>
        {isDark ? <Moon /> : <Sun />}
      </label>
    </div>
  );
};
