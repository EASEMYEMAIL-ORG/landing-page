import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import MainCard from 'components/MainCard';
import FadeInWhenVisible from './Animation';
import { techData } from '../../data/tech-data'; // assumed updated with actual tech stack

export default function TechnologiesPage() {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          mt: { md: 15, xs: 5 },
          mb: { md: 10, xs: 5 },
          textAlign: 'center'
        }}
      >
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 30 }}
          >
            <Typography variant="h2">Technologies We Work With</Typography>
            <Typography sx={{ mt: 1.5, fontSize: { xs: '0.95rem', md: '1.05rem' }, color: 'text.secondary' }}>
              From frontend frameworks to cloud infrastructure, we use modern, battle-tested technologies to build scalable and reliable
              software.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4} justifyContent="center">
            {techData.map((tech, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <FadeInWhenVisible>
                  <MainCard border sx={{ height: '100%' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '100%',
                        gap: 2
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={tech.image}
                        alt={tech.label}
                        sx={{ height: 60, width: 60, objectFit: 'contain', mb: 1 }}
                      />

                      <Typography variant="h5" sx={{ fontWeight: 600, textAlign: 'center' }}>
                        {tech.label}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: 'center',
                          minHeight: 80, // 👈 Ensures equal height
                          display: '-webkit-box',
                          WebkitLineClamp: 4, // Optional: clamp to 4 lines
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {tech.description}
                      </Typography>
                    </Box>
                  </MainCard>
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
