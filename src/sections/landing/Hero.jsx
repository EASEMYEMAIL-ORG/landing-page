import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

export default function HeroPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        pb: 12.5,
        pt: 10,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '150%',
          height: '150%',
          background:
            'radial-gradient(circle at 20% 30%, rgba(37,161,244,0.2), transparent 60%), radial-gradient(circle at 80% 50%, rgba(249,31,169,0.2), transparent 60%)',
          animation: 'bgMove 25s ease-in-out infinite',
          zIndex: 0,
          filter: 'blur(100px)'
        },
        '@keyframes bgMove': {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
          '100%': { transform: 'translateY(0px) scale(1)' }
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 10 }, pb: { md: 0, xs: 22 } }}>
          <Grid item xs={12} md={10}>
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    Scalable{' '}
                    <Typography
                      variant="h1"
                      component="span"
                      sx={{
                        fontSize: 'inherit',
                        background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: 'move-bg 24s infinite linear',
                        '@keyframes move-bg': { '100%': { backgroundPosition: '400% 0' } }
                      }}
                    >
                      Software Solutions
                    </Typography>{' '}
                    Built for the Future
                  </Typography>
                </motion.div>
              </Grid>

              <Grid container justifyContent="center" item xs={12}>
                <Grid item xs={10}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.95rem', md: '1.05rem' },
                        fontWeight: 400,
                        lineHeight: 1.7
                      }}
                    >
                      Developlogy is your partner in custom software development—designed for startups, entrepreneurs, and businesses that demand
                      reliability, scalability, and clean code. Founded by Naveed Pagdiwale, we help you turn bold ideas into robust software.
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
                >
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button variant="contained" color="primary" component={RouterLink} to="/services" size="large">
                        Explore Services
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary" component={RouterLink} to="/schedule-meet" size="large">
                        Schedule a Meet
                      </Button>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
