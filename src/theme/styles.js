import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React


export default {

  /* Layout */
  layout: {
    flexGrow: 1,
    backgroundColor: COLOR.bgcolor
  },
  layoutFx: {
    flex: 1,
    backgroundColor: COLOR.bgcolor
  },
  layoutFxCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  layoutFxBot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  layoutStart:{
    flex: 1,
    backgroundColor: COLOR.bgcolor,
    alignItems: 'flex-start',
  },
  layoutCenter:{
    flex: 1,
    backgroundColor: COLOR.bgcolor,
   alignItems: 'center',
  },
  /* Header */
  nav: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: 'transparent'
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRightIcon: {
    fontSize: SIZE.large,
    color: COLOR.light
  },
  /* Avatar Sizes */
  avatarTiny: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  avatarSmall: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  },
  avatarMedium: {
    width: 128,
    height: 128,
    borderRadius: 125 / 2
  },
  imgResponsive: {
    width: '100%',
    minHeight: 1
  },

  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column'
  },

  /* Label, TextInput, Picker, Placeholder */
  label: {

  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textInputMulti: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  picker: {

  },
  placeholder: {

  },

  /* Button */
  btnPrimary: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.primary
  },
  btnDefault: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR.default
  },
  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },

  headerLight: {
    backgroundColor: COLOR.primary,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerDark: {
    backgroundColor: COLOR.default,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTransparent: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
  },
 titleText:{
  color:'#000',
  fontSize:15,
  fontFamily:FAMILY.semiBold,
  letterSpacing:.8
 },
  /* Colors */
  dark: {
    color: COLOR.dark
  },
  light: {
    color: COLOR.pink
  },
  bgDark: {
    backgroundColor: COLOR.dark
  },
  bgLight: {
    backgroundColor: COLOR.light
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontSize: SIZE.medium,
    //fontFamily: FAMILY.regular,
    textTransform: 'uppercase'
  },
  compact: {
    fontSize: SIZE.compact
  },
  large: {
    fontSize: SIZE.large
  },
  huge: {
    fontSize: SIZE.huge
  },
  higantic: {
    fontSize: SIZE.higantic
  },
  regular: {
    //fontFamily: FAMILY.regular
  },
  bold: {
    //fontFamily: FAMILY.bold
  },

   /* Footer */
   fBtnIcon: {
    fontSize: 22,
    color: '#C8C7CC',
  },
  fBtnIconActive: {
    fontSize: 24,
    color:COLOR.default
  },
  footer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  fBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fBtnText: {
    fontFamily: FAMILY.regular, 
    fontSize: 10,
    color: 'rgba(0,0,0,0.3)'
  },
  fBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fBtnTextActive: {
    fontFamily: FAMILY.regular,
    fontSize: 10,
    color:COLOR.default

  },
  fPop: {
    flex: 1.5
  },
  fPopFx: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
