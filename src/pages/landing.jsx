// material-ui
import Divider from '@mui/material/Divider';

// project-imports
import Hero from '../sections/landing/Hero';
import Technologies from '../sections/landing/Technologies';
import Combo from '../sections/landing/Combo';
import FigmaBlock from '../sections/landing/FigmaBlock';
import Apps from '../sections/landing/Apps';
import Free from '../sections/landing/Free';
import Testimonial from '../sections/landing/Testimonial';
import Partner from '../sections/landing/Partner';
import Subscribe from '../sections/landing/Subscribe';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Landing() {
  return (
    <>
      {/* Header */}
      <Hero />

      {/* Available Technologies */}
      <Technologies />

      {/* Complete Combo */}
      {/* <Combo /> */}

      {/* The Complete Figma Design System to Save Hundreds of Hours */}
      {/* <FigmaBlock /> */}

      {/* Working Conceptual Apps */}
      <Apps />

      {/* TRY BEFORE BUY */}
      {/* <Free /> */}

      {/* They love Able Pro, Now your turn 😍 */}
      <Testimonial />

      {/* Trusted By */}
      {/* <Partner /> */}

      {/* Need Support? */}
      <Subscribe />
      <Divider sx={{ borderColor: 'secondary.light' }} />
    </>
  );
}
