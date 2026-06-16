import { useContext } from 'react';
import { AppContext } from 'App/AppContext';
import 'styles/footer.css';

export const Footer = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <footer className={`footer-container ${isMobile ? 'is-mobile' : ''}`}>
      <p className="footer-text" data-v2="footer">
        {'Designed and built by '}
        <a
          className="footer-link"
          data-v2="creator"
          aria-label="Vikas's personal website (opens in new window)"
          href="https://vikas.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {'Vikas'}
        </a>
        {!isMobile && (
          <>
            {' | '}
            <a
              className="footer-link"
              data-v2="source"
              aria-label="Source code for this website (opens in new window)"
              href="https://github.com/vikas/portfolio"
              rel="noopener noreferrer"
              target="_blank"
            >
              {'Source'}
            </a>
          </>
        )}
      </p>
    </footer>
  );
};
