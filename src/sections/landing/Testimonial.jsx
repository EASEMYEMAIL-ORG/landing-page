import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';
import Avatar from 'components/@extended/Avatar';

// Sample avatars (same as current setup)
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';

function Item({ item }) {
  return (
    <MainCard sx={{ width: { xs: '300px', md: '420px' }, cursor: 'pointer', my: 0.2, mx: 1.5 }}>
      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Avatar alt={item.name} size="lg" src={item.image} />
        <Stack>
          <Typography sx={{ fontStyle: 'italic', mb: 1 }}>{item.text}</Typography>
          <Typography>
            <Typography component="span" variant="caption" sx={{ fontWeight: 600 }}>
              {item.name}
            </Typography>
            {' - '}
            <Typography component="span" sx={{ color: 'text.secondary' }}>
              {item.designation}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

Item.propTypes = { item: PropTypes.object };

export default function TestimonialPage() {
  const theme = useTheme();
  const items = [
    {
      image: Avatar1,
      text: '“Developlogy helped us bring our SaaS product to life in record time. Their backend architecture was rock solid.”',
      name: 'Ankit Mehra',
      designation: 'Founder, Finverse'
    },
    {
      image: Avatar2,
      text: '“They handled our API integrations seamlessly. Super responsive and professional throughout the engagement.”',
      name: 'Priya R.',
      designation: 'CTO, MedConnect'
    },
    {
      image: Avatar3,
      text: '“Highly recommend for any startup looking for a reliable tech partner. Fast, clean code, great UI support.”',
      name: 'Karan Sethi',
      designation: 'Product Manager, RetailBridge'
    },
    {
      image: Avatar4,
      text: '“Naveed and team stepped in when our app was mid-build. Their full-stack expertise saved our project.”',
      name: 'Sanya Kapoor',
      designation: 'Ops Lead, QuickFleet'
    }
  ];

  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 5 } }}>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center', mb: 4, pt: 3 }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <Typography variant="h2">
                  What Our{' '}
                  <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                    Clients Say
                  </Typography>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <Typography>
                  We’re proud to partner with founders, product owners, and teams who trust us to turn ideas into production-ready software.
                  Here’s what they have to say.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ mb: { md: 10, xs: 5 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ direction: theme.direction }}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
          <Grid item xs={12} sx={{ direction: theme.direction }}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
