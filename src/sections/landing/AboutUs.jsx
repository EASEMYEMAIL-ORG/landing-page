import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// assets
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| LANDING - HERO PAGE ||============================== //

export default function AboutUS() {
  const theme = useTheme();
  
  console.log("*****************")
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
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    Explore One of the{' '}
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
                      Featured Dashboard
                    </Typography>{' '}
                    Template in Themeforest
                  </Typography>
                </motion.div>
              </Grid>
              <Grid container justifyContent="center" item xs={12}>
                <Grid item xs={8}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 30,
                      delay: 0.2
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 400,
                        lineHeight: { xs: 1.4, md: 1.4 }
                      }}
                    >
                      Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                      wordwide.
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.6
                  }}
                >
                  <Grid container spacing={3} justifyContent="center">
                    <Grid
                      item
                      sx={{
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          height: 30,
                          bottom: 10,
                          left: 'auto',
                          right: '-12px',
                          width: '1px',
                          background: theme.palette.divider
                        }
                      }}
                    >
                      <Rating name="read-only" value={4.5} size="small" readOnly />
                      <Typography variant="h4">
                        4.7/5
                        <span
                          style={{
                            fontSize: '75%',
                            fontWeight: 400,
                            margin: 5,
                            color: theme.palette.text.secondary
                          }}
                        >
                          Ratings
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        <span
                          style={{
                            fontSize: '75%',
                            fontWeight: 400,
                            color: theme.palette.text.secondary
                          }}
                        >
                          Sales
                        </span>
                      </Typography>
                      <Typography variant="h4">2.5K+</Typography>
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
