import {
  cyan500,
  cyan700,
  darkBlack,
  fullBlack,
  fullWhite,
  grey100,
  grey300,
  grey400,
  grey500,
  grey600,
  pink500,
  pink700,
  pinkA100,
  pinkA200,
  pinkA400,
  red500,
  red700,
  redA200,
  blue700,
  blue500,
  grey900,
  lightBlue500,
  blueA200,
  lightBlue700,
  deepPurple500,
  lightBlue100,
  deepPurple700,
  deepPurple100,
  deepPurpleA200,
  white,
  purple500,
  purple700,
  purpleA200,
  purple100,
  indigo500,
  indigo700,
  indigo100,
  indigoA200,
  teal500,
  teal700,
  teal100,
  green500,
  green700,
  green100,
  lightGreen500,
  lightGreen700,
  lightGreen100,
  lime500,
  lime700,
  lime100,
  yellow500,
  yellow700,
  yellow100,
  amber500,
  amber700,
  amber100,
  orange500,
  orange700,
  orange100,
  deepOrange500,
  deepOrange700,
  deepOrange100,
  brown500,
  brown700,
  brown100,
  blueGrey500,
  blueGrey700,
  blueGrey100,
  grey700
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiTheme } from 'material-ui/styles';

export const color: { [key: string]: __MaterialUI.Styles.ThemePalette } = {
  'red': {
    primary1Color: red500,
    primary2Color: red700,
    primary3Color: grey600,
    accent1Color: redA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'cyan': {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: cyan500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'pink': {
    primary1Color: pink500,
    primary2Color: pink700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    alternateTextColor: white,
  },
  'blue': {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: blueA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'lightBlue': {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    primary3Color: lightBlue100,
    accent1Color: deepPurpleA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'white': {
    primary1Color: "#f1f3f4",
    primary2Color: grey400,
    primary3Color: grey400,
    accent1Color: grey400,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: darkBlack,
  },
  'deepPurple': {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: deepPurple100,
    accent1Color: deepPurpleA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'purple': {
    primary1Color: purple500,
    primary2Color: purple700,
    primary3Color: purple100,
    accent1Color: purpleA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'indigo': {
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: indigo100,
    accent1Color: indigoA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'teal': {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: teal100,
    accent1Color: teal500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'green': {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
    accent1Color: green500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'lightGreen': {
    primary1Color: lightGreen500,
    primary2Color: lightGreen700,
    primary3Color: lightGreen100,
    accent1Color: lightGreen500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'lime': {
    primary1Color: lime500,
    primary2Color: lime700,
    primary3Color: lime100,
    accent1Color: lime500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'yellow': {
    primary1Color: yellow500,
    primary2Color: yellow700,
    primary3Color: yellow100,
    accent1Color: yellow500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'amber': {
    primary1Color: amber500,
    primary2Color: amber700,
    primary3Color: amber100,
    accent1Color: amber500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'orange': {
    primary1Color: orange500,
    primary2Color: orange700,
    primary3Color: orange100,
    accent1Color: orange500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'deepOrange': {
    primary1Color: deepOrange500,
    primary2Color: deepOrange700,
    primary3Color: deepOrange100,
    accent1Color: deepOrange500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'brown': {
    primary1Color: brown500,
    primary2Color: brown700,
    primary3Color: brown100,
    accent1Color: brown500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'blueGrey': {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    primary3Color: blueGrey100,
    accent1Color: blueGrey500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  },
  'grey': {
    primary1Color: grey500,
    primary2Color: grey700,
    primary3Color: grey100,
    accent1Color: grey500,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
  }
}

export const theme: { [key: string]: __MaterialUI.Styles.ThemePalette } = {
  "dark": {
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
  "light": {
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
}