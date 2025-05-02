import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', pb: 12.5, pt: 10, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 10 }, pb: { md: 0, xs: 22 } }}>
          <Grid item xs={12} md={9}>
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
                    About{' '}
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
                      Developlogy
                    </Typography>
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
                    <Typography variant="h6" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, fontWeight: 400, lineHeight: 1.7 }}>
                      At Developlogy, we specialize in custom software development tailored for startups, businesses, and entrepreneurs
                      who need reliable, scalable digital solutions.
                      <br /><br />
                      Founded by Naveed Pagdiwale, a full-stack developer with realtime industry hands-on experience, we bring deep
                      technical expertise, a problem-solving mindset, and a commitment to delivering clean, efficient, and future-proof
                      code.
                      <br /><br />
                      Whether you need a freelance developer, a technical consultant, or an end-to-end project partner, we help you turn ideas into
                      production-ready software—on time and within budget.
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
                  <Typography variant="h4" gutterBottom>
                    Services We Offer:
                  </Typography>
                  <Grid container justifyContent="center">
                    <Grid item xs={10}>
                      <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: 1.9 }}>
                        <li>Full-Stack Web & Mobile App Development</li>
                        <li>API Integration & Backend Engineering</li>
                        <li>Software Architecture Consulting</li>
                        <li>UI/UX Collaboration & Frontend Development</li>
                        <li>Freelance or Project-Based Engagements</li>
                      </ul>
                      <Typography variant="h5" sx={{ mt: 3 }}>
                        Let&apos;s build something great together.
                      </Typography>
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
