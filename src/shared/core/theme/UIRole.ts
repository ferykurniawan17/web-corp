import { FontSizeType, HeadingColorType, InputTextColorType, TokenType } from "../types/ThemeTypes";
import Token from "./Token";

export const getHeadingTheme = (
  {
    fontSize,
    headingColor: color,
  }: { fontSize: FontSizeType, headingColor: HeadingColorType }) => ({
  largeHeadline: {
    fontSize: fontSize.gigantic,
    fontFamily: 'OpenSans_700Bold',
    fontWeight: 'bold',
    color: color.largeHeadline,
  },
  headline: {
    fontSize: fontSize.huge,
    fontFamily: 'OpenSans_700Bold',
    color: color.headline,
  },
  title1: {
    fontSize: fontSize.big,
    fontFamily: 'OpenSans_700Bold',
    color: color.title1,
  },
  title2: {
    fontSize: fontSize.large,
    fontFamily: 'OpenSans_700Bold',
    color: color.title2,
  },
  title3: {
    fontSize: fontSize.medium,
    fontFamily: 'OpenSans_700Bold',
    color: color.title3,
  },
  caption: {
    fontSize: fontSize.small,
    fontFamily: 'OpenSans_400Regular',
    color: color.caption,
    lineHeight: 23,
  },
  paragraf: {
    fontSize: fontSize.small,
    fontFamily: 'OpenSans_400Regular',
    color: color.paragraf,
    lineHeight: 23,
  },
  label: {
    fontSize: fontSize.medium,
    fontFamily: 'OpenSans_600SemiBold',
    color: color.label,
    lineHeight: 20,
  },
  large: {},
  medium: {
    fontSize: fontSize.medium,
    fontFamily: 'OpenSans_400Regular',
    color: color.medium,
    lineHeight: 19,
  },
  small: {
    fontSize: fontSize.small,
    fontFamily: 'OpenSans_300Light',
    color: color.small,
    lineHeight: 19,
  },
  tiny: {
    fontSize: fontSize.tiny,
    fontFamily: 'OpenSans_300Light',
    color: color.tiny,
    lineHeight: 19,
  },
  micro: {
    fontSize: fontSize.micro,
    fontFamily: 'OpenSans_300Light',
    color: color.tiny,
    lineHeight: 18,
  },
});

export const getButtonTheme = (token: TokenType) => ({
  primary: {
    buttonStyle: {
      backgroundColor: token.color.brandPrimary,
      borderRadius: token.border.radius.default,
      paddingVertical: token.spacing.s,
      borderColor: Token.color.brandPrimary,
      borderWidth: Token.border.width.thin,
    },
    containerStyle: {},
    disabledStyle: {},
    disabledTitleStyle: {},
    iconContainerStyle: {},
    loadingStyle: {},
    titleStyle: {
      fontFamily: 'OpenSans_600SemiBold',
    },
  },
  secondary: {
    buttonStyle: {
      backgroundColor: token.color.lightPrimary,
      borderRadius: token.border.radius.default,
      paddingVertical: token.spacing.s,
      borderColor: Token.color.brandPrimary,
      borderWidth: Token.border.width.thin,
    },
    containerStyle: {},
    disabledStyle: {},
    disabledTitleStyle: {},
    iconContainerStyle: {},
    loadingStyle: {},
    titleStyle: {
      fontFamily: 'OpenSans_600SemiBold',
      color: Token.color.brandPrimary,
    },
  },
  cta: {
    buttonStyle: {
      paddingVertical: token.spacing.s,
    },
    containerStyle: {},
    disabledStyle: {},
    disabledTitleStyle: {},
    iconContainerStyle: {},
    loadingStyle: {},
    titleStyle: {
      fontFamily: 'OpenSans_600SemiBold',
    },
  },
  text: {
    type: 'clear',
    buttonStyle: {
      paddingVertical: token.spacing.s,
    },
    containerStyle: {},
    disabledStyle: {},
    disabledTitleStyle: {},
    iconContainerStyle: {},
    loadingStyle: {},
    titleStyle: {
      color: token.color.brandPrimary,
      fontFamily: 'OpenSans_600SemiBold',
    },
  },
  disable: {
    raised: false,
    buttonStyle: {
      backgroundColor: token.color.disableColor,
      borderRadius: token.border.radius.default,
      paddingVertical: token.spacing.s,
      borderColor: Token.color.disableColor,
      borderWidth: Token.border.width.thin,
    },
    containerStyle: {},
    disabledStyle: {},
    disabledTitleStyle: {},
    iconContainerStyle: {},
    loadingStyle: {},
    titleStyle: {
      fontFamily: 'OpenSans_600SemiBold',
    },
  },
  danger: {
    buttonStyle: {
      backgroundColor: 'rgba(235, 94, 102, 0.2)',
      borderRadius: token.border.radius.default,
      paddingVertical: token.spacing.s,
    },
    containerStyle: {},
    disabledStyle: {},
    disabledTitleStyle: {},
    iconContainerStyle: {},
    loadingStyle: {},
    titleStyle: {
      fontFamily: 'OpenSans_600SemiBold',
      color: Token.color.redPrimary,
    },
  },
});

export const getInputTheme = ({
  token,
  color,
}: { token: TokenType, color: InputTextColorType }) => ({
  border: {
    containerStyle: {
      marginBottom: 0,
      paddingEnd: 0,
      paddingStart: 0,
      paddingBottom: 0,
    },
    disabledInputStyle: {
      color: color.disable,
    },
    errorStyle: {
      color: color.error,
    },
    inputContainerStyle: {
      borderBottomWidht: 0,
      borderWidth: token.border.width.thin,
      borderRadius: token.border.radius.default,
      borderColor: token.color.graySecondary,
    },
    inputStyle: {
      padding: token.spacing.s,
      fontSize: token.fontSize.medium,
      color: color.text,
      textAlignVertical: 'top',
    },
    labelStyle: {
      color: color.label,
      marginBottom: token.spacing.xs,
    },
    leftIconContainerStyle: {},
    rightIconContainerStyle: {},
  },
  clear: {
    containerStyle: {
      marginBottom: 0,
      paddingEnd: 0,
      paddingStart: 0,
      paddingBottom: 0,
    },
    disabledInputStyle: {
      color: color.disable,
    },
    errorStyle: {
      color: color.error,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
    inputStyle: {
      padding: token.spacing.s,
      fontSize: token.fontSize.medium,
      color: color.text,
      textAlignVertical: 'top',
    },
    labelStyle: {
      color: color.label,
      marginBottom: token.spacing.xs,
    },
    leftIconContainerStyle: {},
    rightIconContainerStyle: {},
  }, 
  underline: {
    containerStyle: {
      marginBottom: 0,
      paddingEnd: 0,
      paddingStart: 0,
      paddingBottom: 0,
    },
    disabledInputStyle: {
      color: color.disable,
    },
    errorStyle: {
      color: color.error,
      position: 'relative',
      left: token.spacing.xxs * -1,
      marginTop: token.spacing.xs,
    },
    inputContainerStyle: {
      borderBottomWidht: token.border.width.thin,
      borderBottomColor: token.color.graySecondary,
    },
    inputStyle: {
      paddingTop: token.spacing.s,
      paddingBottom: token.spacing.s,
      fontSize: token.fontSize.medium,
      color: color.text,
      textAlignVertical: 'top',
    },
    labelStyle: {
      color: color.label,
      marginBottom: token.spacing.xs,
    },
    leftIconContainerStyle: {},
    rightIconContainerStyle: {},
  }, 
});
