import PropTypes from 'prop-types';
import { useState, cloneElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';

// Project imports
import { ThemeDirection } from 'config';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import Logo from 'components/logo';
import { useIspValue } from 'hooks/useIspValue';

// Icons
import { ExportSquare, DocumentDownload, HambergerMenu } from 'iconsax-react';
import { Minus } from 'iconsax-react';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window || undefined
  });

  return cloneElement(children, {
    style: {
      boxShadow: trigger ? '0 8px 6px -10px rgba(0, 0, 0, 0.5)' : 'none',
      backgroundColor: trigger ? alpha(theme.palette.background.default, 0.8) : alpha(theme.palette.background.default, 0.1)
    }
  });
}

export default function Header({ layout = 'landing', ...others }) {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);
  const ispValueAvailable = useIspValue();

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerToggle(open);
  };

  const url = ispValueAvailable ? 'https://1.envato.market/OrJ5nn' : 'https://1.envato.market/zNkqj6';

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={{
          bgcolor: alpha(theme.palette.background.default, 0.1),
          backdropFilter: 'blur(8px)',
          color: theme.palette.text.primary,
          boxShadow: 'none'
        }}
      >
        <Container maxWidth="xl" disableGutters={matchDownMd}>
          <Toolbar sx={{ px: { xs: 1.5, sm: 4 }, py: 1 }}>
            {/* Logo & Version */}
            <Stack direction="row" sx={{ flexGrow: 1 }} alignItems="center">
              <Logo to="/" />
              <Chip
                label={import.meta.env.VITE_APP_VERSION}
                variant="outlined"
                size="small"
                color="secondary"
                sx={{ ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
              />
            </Stack>

            {/* Desktop Nav */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{
                display: { xs: 'none', md: 'flex' },
                '& .header-link': { fontWeight: 500, '&:hover': { color: 'primary.main' } }
              }}
            >
              <Link className="header-link" color="secondary.main" component={RouterLink} to="/about-us" underline="none">
                About Us
              </Link>
              <Link className="header-link" color="secondary.main" component={RouterLink} to="/careers" underline="none">
                Careers
              </Link>
              <Link
                className="header-link"
                color="secondary.main"
                href="https://phoenixcoded.gitbook.io/able-pro"
                underline="none"
                target="_blank"
              >
                Contact Us
              </Link>
              <Link href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template" target="_blank" underline="none">
                <IconButton
                  size="large"
                  shape="rounded"
                  color="secondary"
                  sx={{
                    bgcolor: 'secondary.light',
                    color: 'secondary.darker',
                    '&:hover': {
                      color: 'secondary.lighter',
                      bgcolor: 'secondary.darker'
                    }
                  }}
                >
                  <DocumentDownload />
                </IconButton>
              </Link>
              <AnimateButton>
                <Button
                  component={Link}
                  href={url}
                  target="_blank"
                  disableElevation
                  startIcon={<ExportSquare />}
                  color="success"
                  size="large"
                  variant="contained"
                >
                  Schedule a Meet
                </Button>
              </AnimateButton>
            </Stack>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" color="secondary" onClick={drawerToggler(true)} sx={{ p: 1 }}>
                <HambergerMenu />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  role="presentation"
                  onKeyDown={drawerToggler(false)}
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 32
                    }
                  }}
                >
                  <List>
                    <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/about-us">
                      <ListItemButton>
                        <ListItemIcon><Minus /></ListItemIcon>
                        <ListItemText primary="About Us" />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/careers">
                      <ListItemButton>
                        <ListItemIcon><Minus /></ListItemIcon>
                        <ListItemText primary="Careers" />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="https://phoenixcoded.gitbook.io/able-pro" target="_blank">
                      <ListItemButton>
                        <ListItemIcon><Minus /></ListItemIcon>
                        <ListItemText primary="Contact Us" />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template" target="_blank">
                      <ListItemButton>
                        <ListItemIcon><Minus /></ListItemIcon>
                        <ListItemText primary="GitHub" />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href={url} target="_blank">
                      <ListItemButton>
                        <ListItemIcon><Minus /></ListItemIcon>
                        <ListItemText primary="Schedule a Meet" />
                        <Chip label={import.meta.env.VITE_APP_VERSION} size="small" color="primary" />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = { children: PropTypes.node, window: PropTypes.any };
Header.propTypes = { layout: PropTypes.string, others: PropTypes.any };
