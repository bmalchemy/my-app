import { createTheme } from '@mui/material/styles';
import {
  amber,
  blue,
  red,
  green,
  lightBlue,
  lightGreen,
  grey,
  blueGrey,
  orange,
  cyan,
  deepPurple,
  deepOrange,
} from '@mui/material/colors';

const defaultCheckedColor = {
  styleOverrides: {
    root: {
      '&.Mui-checked': {
        color: blue[700],
      },
    },
  },
};

/**
 * https://material.io/tools/color
 */
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#474e54',
      light: '#546e7a',
      dark: '#320b86',
      contrastText: '#ffffff',
      textPrimaryMain: '#1976d2',
      textPrimaryDialog: '#1976D2',
    },
    secondary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: '#72909d',
      light: '#a1c0ce',
      dark: '#45636f',
      contrastText: '#000000',
    },
    error: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
      contrastText: '#ffffff',
      background: red[50], // #ffebee
    },
    common: {
      white: '#ffffff',
      black: '#000000',
      ligtBlue: '#bbdefb',
      ligtPurple: '#c5cae9',
      lightTeal: '#b2dfdb',
      navyBlue: '#303f9f',
      yellow50: '#fff8e1', // yellow[50]
      orange: '#f57c00', // orange[700]
      teal: '#00796b',
      rhino: '#444d57',
      sonicSilver: '#757575',
    },
    text: {
      primary: grey[900], //  #212121
      lightBlue: blue[100], // #bbdefb
      lightGrey: grey[600], // #757575
      green: green[700], // #388e3c
      red: red[800], // #c62828
      blue: blue[700], // #1976d2,
      orange: deepOrange[500], // #ff5722
    },
    background: {
      darkBlueGrey: blueGrey[700], // #455a64
      darkGrey: blueGrey[900], // #263238
      default: '#FFF',
      gray: blueGrey[50], // #ECEFF1
      grayHover: grey[300], // #E0E0E0
      yellow: orange[50], // #FFF3E0
      extraLightBlue: blue[50], // #e3f2fd
      extraLightGreen: lightGreen[50], // #f1f8e9,
      cyan: cyan[500], // #00bcd4,
      lightGrey: grey[400], // #bdbdbd
      purple: deepPurple[700],
      green: green[500], // #4caf50
      blue: blue[700], // #1976d2,
      lightBlue: blue[100], // #bbdefb
      red: red[800], // #c62828,
      greenHover: green[700], // #388e3c
      blueHover: blue[800], // #1565c0,
      redHover: red[900], // #b71c1c,
      disabledGrey: blueGrey[100], // #cfd8dc
      lightGreen: green[300], // #81c784
      intertekGrey: '#474E54',
      lightOrange: orange[300], // #FFB74D
      lightBlueGrey: blueGrey[200], // #b0bec5
      mediumBlue: lightBlue[900], // #01579b
    },
    button: {
      '-webkit-box-shadow': '2px 2px 1px 0px rgba(0,0,0,0.3)',
      '-moz-box-shadow': '2px 2px 1px 0px rgba(0,0,0,0.3)',
      boxShadow: '2px 2px 1px 0px rgba(0,0,0,0.3)',
    },
  },
  status: {
    warning: amber[500],
    success: green[900],
    failure: orange[900],
  },
  overrides: {
    AdvancedSelector: {
      palette: {
        primary: {
          main: blue[700],
        },
      },
    },
  },
  components: {
    MuiCheckbox: defaultCheckedColor,
    MuiRadio: defaultCheckedColor,
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .Mui-checked': {
            color: blue[700],
            '~ .MuiSwitch-track': {
              backgroundColor: blue[700],
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
          },
        },
      },
    },
  },
});

export default theme;
