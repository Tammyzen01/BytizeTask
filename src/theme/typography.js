import { Dimensions,StatusBar,Platform } from 'react-native';

export const FAMILY = {
  regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
  medium:'Poppins-Medium',
  logo: 'Mackless-Script',
  semiBold:'Poppins-semiBold'
}

export const COLOR = {
  default:'#29bcee',
  white:'#fff',
  dark:'#000',
  lightGrey:'#b3b3b3',
  grey: '#444',
  red:'#f71000',
  blue:'#0091ff',
  blueDark:'#1868d9',
  smoke:'#dbdbdb'
}

export const SIZE = {
  tiny: 10,
  small: 12,
  medium: 14,
  compact: 16,
  large: 18,
  huge: 24,
  higantic: 36,
  higantic_2: 48,
  big: 72
}

export const DIMENSIONS = {
  WIDTH:Dimensions.get('screen').width,
  HEIGHT:Dimensions.get('screen').height,
}

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
