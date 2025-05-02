import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import { motion } from 'framer-motion';

import Logo from 'components/logo';

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

export default function FooterBlock({ isFull }) {
  const theme = useTheme();

  const linkSX = {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 5 : 10, pb: 10, bgcolor: 'secondary.200', borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Logo to="/" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, maxWidth: 320 }}>
                      Developlogy is a custom software studio founded by Naveed Pagdiwale, offering tailored digital solutions for startups
                      and businesses.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      © {new Date().getFullYear()} Developlogy. All rights reserved.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={2}>
                    <Typography variant="h6">Company</Typography>
                    <FooterLink href="/about-us" underline="none">
                      About Us
                    </FooterLink>
                    <FooterLink href="/services" underline="none">
                      Services
                    </FooterLink>
                    <FooterLink href="/projects" underline="none">
                      Projects
                    </FooterLink>
                    <FooterLink href="/careers" underline="none">
                      Careers
                    </FooterLink>
                  </Stack>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <Stack spacing={2}>
                    <Typography variant="h6">Support</Typography>
                    <FooterLink href="/contact" underline="none">
                      Contact Us
                    </FooterLink>
                    <FooterLink href="/schedule-meet" underline="none">
                      Schedule a Meet
                    </FooterLink>
                    <FooterLink href="mailto:support@developlogy.com" underline="none">
                      Email Support
                    </FooterLink>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Stack spacing={2}>
                    <Typography variant="h6">Follow Us</Typography>
                    <Stack direction="row" spacing={2}>
                      <Tooltip title="LinkedIn">
                        <Link href="https://linkedin.com/in/naveedpagdiwale" target="_blank" sx={linkSX}>
                          <LinkedInIcon variant="Bold" size={20} />
                        </Link>
                      </Tooltip>
                      <Tooltip title="GitHub">
                        <Link href="https://github.com/developlogy" target="_blank" sx={linkSX}>
                          <GitHubIcon variant="Bold" size={20} />
                        </Link>
                      </Tooltip>
                      <Tooltip title="YouTube">
                        <Link href="#" target="_blank" sx={linkSX}>
                          <YouTubeIcon variant="Bold" size={20} />
                        </Link>
                      </Tooltip>
                      <Tooltip title="Facebook">
                        <Link href="#" target="_blank" sx={linkSX}>
                          <FacebookIcon variant="Bold" size={20} />
                        </Link>
                      </Tooltip>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 2.4, borderTop: `1px solid ${theme.palette.divider}`, bgcolor: 'secondary.200' }}>
        <Container>
          <Typography align="center" variant="body2" color="text.secondary">
            Handcrafted with ♥ by Developlogy
          </Typography>
        </Container>
      </Box>
    </>
  );
}

FooterBlock.propTypes = {
  isFull: PropTypes.bool
};
