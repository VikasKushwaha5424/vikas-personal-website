import { useContext } from 'react';
import { AppContext } from 'App/AppContext';
import 'styles/content.css';

export const Content = () => {
  const { config } = useContext(AppContext);

  return (
    <>
      <h1 className="content-name" data-v2="name">
        {config.name.display}
      </h1>
      <h2 className="content-title" data-v2="title">
        {config.title.display}
      </h2>
    </>
  );
};
