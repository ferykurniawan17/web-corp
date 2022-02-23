export type FontSizeType = {
  gigantic: number;
  huge: number;
  big: number;
  large: number;
  medium: number;
  small: number;
  tiny: number;
  micro: number;
};

export type ColorType = {
  brandPrimary: string;
  brandSecondary: string;
  brandTertiary: string;
  brandBackground?: string;
  lightPrimary: string;
  lightSecondary: string;
  lightTertiary: string;
  darkPrimary: string;
  darkSecondary: string;
  darkTertiary: string;
  bluePrimary: string;
  blueSecondary: string;
  blueTertiary: string;
  orangePrimary: string;
  orangeSecondary: string;
  orangeTertiary: string;
  redPrimary: string;
  redSecondary: string;
  redTertiary: string;
  yellowPrimary: string;
  yellowSecondary: string;
  yellowTertiary: string;
  greenPrimary: string;
  greenSecondary: string;
  greenTertiary: string;
  grayPrimary: string;
  graySecondary: string;
  grayTertiary: string;
  disableColor: string;
  winePrimary: string;
  wineSecondary: string;
  wineTertiary: string;
};

export type SpacingType = {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  ml: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
  xxxxl: number;
};

export type OpacityType = {
  opaque: (color?: string | undefined) => string | number;
  obscure: (color?: string | undefined) => string | number;
  translucent: (color?: string | undefined) => string | number;
  washedOut: (color?: string | undefined) => string | number;
  seeThrough: (color?: string | undefined) => string | number;
  clear: (color?: string | undefined) => string | number;
};

type ElevationItemType = {
  shadowColor: any;
  shadowOffset: any;
  shadowOpacity: any;
  shadowRadius: any;
  elevation: any;
};

export type ElevationType = {
  container: ElevationItemType;
  interactive: ElevationItemType;
  raised: ElevationItemType;
  float: ElevationItemType;
  hover: ElevationItemType;
};

export type BorderType = {
  width: {
    thin: number;
    thick: number;
    bold: number;
  },
  radius: {
    default: number;
    rounded: string;
  },
};

export type TokenType = {
  fontSize: FontSizeType;
  color: ColorType;
  spacing: SpacingType;
  elevation: ElevationType;
  border: BorderType;
  opacity: OpacityType;
};

export type CheckboxContainerType = {
  background: string;
  checkedBackground: string;
  checkmarkColor: string;
  checkedMarkColor: string;
  border: string;
};

export type ContainerType = {
  view: any;
  text: any;
  checkbox: CheckboxContainerType;
};

export type HeadingColorType = {
  largeHeadline: string;
  headline: string;
  title1: string;
  title2: string;
  title3: string;
  caption: string;
  paragraf: string;
  label: string;
  medium: string;
  large: string;
  small: string;
  tiny: string;
};

export type InputTextColorType = {
  text: string;
  label: string;
  error: string;
  hint: string;
  disable: string;
};

export type HeadingType = {
  largeHeadline: any;
  headline: any;
  title1: any;
  title2: any;
  title3: any;
  caption: any;
  paragraf: any;
  label: any;
  medium: any;
  large: any;
  small: any;
  tiny: any;
  micro: any;
};

type ButtonType = {
  raised?: boolean;
  type?: string;
} & ButtonProps & any;

export type ButtonThemeType = {
  primary: ButtonType;
  secondary: ButtonType;
  cta: ButtonType;
  text: ButtonType;
  danger: ButtonType;
};

export type InputType = {
  containerStyle: ViewStyle;
  disabledInputStyle: TextStyle;
  errorStyle: object;
  inputContainerStyle: ViewStyle;
  inputStyle: ViewStyle;
  labelStyle: object;
  leftIconContainerStyle: ViewStyle;
  rightIconContainerStyle: ViewStyle;
} & InputProps & any;

export type InputThemeType = {
  border: InputType,
  clear: InputType,
  underline: InputType,
};

export type ThemeFieldType = {
  container: ContainerType;
  heading: HeadingType;
  button: ButtonThemeType;
  input: InputThemeType;
} & TokenType;