import {
  BorderType,
  ColorType,
  ElevationType,
  FontSizeType,
  OpacityType,
  SpacingType,
} from '../types/ThemeTypes';
import tinycolor from 'tinycolor2';

export const fontSize: FontSizeType = {
  gigantic: 48,
  huge: 32,
  big: 24,
  large: 20,
  medium: 17,
  small: 15,
  tiny: 13,
  micro: 11,
};

export const spacing: SpacingType = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 56,
};

export const color: ColorType = {
  brandPrimary: '#4445B6',
  brandSecondary: '#9542A8',
  brandTertiary: '#9542A8',
  brandBackground: '#F9F5FA',

  lightPrimary: '#ffffff',
  lightSecondary: '#ffffff',
  lightTertiary: '#ffffff',

  darkPrimary: '#000000',
  darkSecondary: '#101010',
  darkTertiary: '#8a8a8e',

  bluePrimary: '#0000ff',
  blueSecondary: '#0A7AFF',
  blueTertiary: '#EDF4FF',

  orangePrimary: '#ffa500',
  orangeSecondary: '#D53B80',
  orangeTertiary: '#ffa500',

  redPrimary: '#D61D24',
  redSecondary: '#EB5E66',
  redTertiary: '#ff0000',

  yellowPrimary: '#ffff00',
  yellowSecondary: '#ffff00',
  yellowTertiary: '#ffff00',

  greenPrimary: '#008000',
  greenSecondary: '#008000',
  greenTertiary: '#008000',

  grayPrimary: '#cccccc',
  graySecondary: '#f2f2f2',
  grayTertiary: '#cccccc',

  winePrimary: '#EEEEF8',
  wineSecondary: '#EEEEF8',
  wineTertiary: '#F6F6FF',

  disableColor: '##BCBDBE',
};

// Use Closure to generate new function
function makeOpacityGetter(opacityPercentage: number) {
  return function getOpacity(color?: string) {
    if (!color) return opacityPercentage;

    const formattedColor = tinycolor(color);
    formattedColor.setAlpha(opacityPercentage);
    return formattedColor.toHex8String();
  };
}

export const opacity: OpacityType = {
  opaque: makeOpacityGetter(0.8),
  obscure: makeOpacityGetter(0.65),
  translucent: makeOpacityGetter(0.5),
  washedOut: makeOpacityGetter(0.4),
  seeThrough: makeOpacityGetter(0.2),
  clear: makeOpacityGetter(0.15),
};

export const elevation: ElevationType = {
  container: {
    shadowColor: color.darkPrimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: opacity.seeThrough(),
    shadowRadius: 2,
    elevation: 1,
  },
  interactive: {
    shadowColor: color.darkPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.clear(),
    shadowRadius: 5,
    elevation: 1,
  },
  raised: {
    shadowColor: color.darkPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.clear(),
    shadowRadius: 5,
    elevation: 1,
  },
  float: {
    shadowColor: color.darkPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: opacity.clear(),
    shadowRadius: 10,
    elevation: 1,
  },
  hover: {
    shadowColor: color.darkPrimary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: opacity.seeThrough(),
    shadowRadius: 16,
    elevation: 1,
  },
};

export const border: BorderType = {
  width: {
    thin: 0.5,
    thick: 1,
    bold: 2,
  },
  radius: {
    default: 10,
    rounded: '50%',
  },
};

const Token = {
  color,
  spacing,
  border,
  fontSize,
  elevation,
  opacity,
};

export default Token;