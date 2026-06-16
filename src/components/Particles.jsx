import ReactParticles from 'react-tsparticles';
import { options } from 'appearance';
import 'styles/particles.css';

export const Particles = () => {
  return (
    <div className="particles-container" data-v2="particles">
      <ReactParticles width="100vw" height="100vh" options={options} />
    </div>
  );
};
