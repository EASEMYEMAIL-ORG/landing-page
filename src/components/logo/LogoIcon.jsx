// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="icon logo" width="100" />
     *
     */
    <svg
      baseProfile="tiny"
      height="28"
      version="1.2"
      width="250px"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:ev="http://www.w3.org/2001/xml-events"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs />
      <rect fill={theme.palette.primary.main} height="20" rx="4" ry="4" width="20" x="4" y="4" />
      <text fill={theme.palette.primary.main} font-family="Arial" font-size="16" font-weight="bold" x="11" y="20">
        Developlogy
      </text>
    </svg>
  );
}
