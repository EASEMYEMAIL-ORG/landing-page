// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="icon logo" width="100" />
     *
     */
    <>
      <svg
        baseProfile="tiny"
        height="60px"
        version="1.2"
        width="250px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:ev="http://www.w3.org/2001/xml-events"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <text fill={theme.palette.primary.main} font-family="Arial" font-size="36" font-weight="bold" x="0px" y="40px">
          Developlogy
        </text>
      </svg>
    </>
  );
}
