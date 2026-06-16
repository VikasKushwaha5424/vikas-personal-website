import { useContext } from 'react';
import { AppContext } from 'App/AppContext';
import 'styles/buttons.css';

export const Buttons = () => {
  const { config } = useContext(AppContext);

  return (
    <div className="buttons-container">
      {config.buttons.map(({ name, display, ariaLabel, icon, href }) => (
        <span className="button-container" key={name}>
          <a
            data-v2={`button-${display}`}
            className="button"
            aria-label={ariaLabel}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="icon">{icon}</div>
            <span data-v2={display} className="icon_title">
              {display}
            </span>
          </a>
        </span>
      ))}
    </div>
  );
};
