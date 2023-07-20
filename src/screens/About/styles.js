import { COLOR, FAMILY } from '@theme/typography'

const React = require("react-native");
const { Dimensions,StyleSheet } = React;
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  lottieView:{
    width:width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'#fff',
  },
  HeadingText:{
    fontFamily:FAMILY.bold,
    fontSize:23,
    color:COLOR.dark
  },
  SubTitleText:{
    fontFamily:FAMILY.bold,
    fontSize:18
  },
  description:{ 
    color:'#000', 
    fontFamily:FAMILY.regular
  },
  pointsText:{ 
    fontSize:15,
    color:'#000', 
    fontFamily:FAMILY.semiBold
  },
  IconView:{
    // position:'absolute',
    marginVertical:10,
    left:5,
    zIndex: 25,
    flexDirection:'row'
  },
 
  round:{
     backgroundColor:'#000',
     width:8,
     height:8,
     borderRadius:12,
     marginRight:8,
     marginTop:8
  },
  SubTitleText1:{
    fontFamily:FAMILY.bold,
    fontSize:16
  },
  backView: {
    width:width,
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontFamily: FAMILY.bold,
    fontSize: 20,
    color: '#000',
  },
  IconStyle:{
    fontFamily: FAMILY.bold,
    fontSize: 26,
    color:'#000',
  },
  logoStyle:{
    width:100,
    height:60,
    marginRight:12
  },
  firstBoxView:{
    width:width,
    paddingHorizontal:12,
    paddingVertical:10,
    alignItems:'center'
  },
  firstBoxInnerView:{
    width:'95%',
    paddingVertical:10,
    backgroundColor:'#fff',
    borderRadius:12,
    // elevation:8
  },
  lottieInnerView:{
    width:'90%',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:12,
    elevation:8
  },
  row:{
    width:'100%',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-around'
  },
  contentText:{
    fontFamily: FAMILY.semiBold,
    fontSize: 15,
    color: '#000'
  },
  sectionMainInnerRow:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
  },
  cardPro: {
    width: 50,
    height: 50,
  },
  employeeIcon: {
    fontSize: 13,
    color: COLOR.dark,
    opacity: .4
  },
  mailText: {
    color: 'grey',
    fontSize: 11,
    opacity: .8,
    fontFamily: FAMILY.medium,
    marginHorizontal: 5,
  },
  sectionMainView:{
    paddingVertical:8,
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:15,
    paddingHorizontal:18,
    marginBottom:28,
    marginLeft:15,
    elevation: 8,
    paddingBottom:10
  },
  contractcontentView:{
    width:'48%'
  },
  TitleText: {
    fontFamily: FAMILY.medium,
    fontSize: 10,
    color: COLOR.grey,
    opacity: .7,
    textTransform: 'uppercase'
  },
  valueText: {
    marginTop:6,
    fontFamily: FAMILY.medium,
    fontSize: 13,
    color: COLOR.dark,
    lineHeight:20
  },
  font_3:{
    width:222,
    fontFamily: FAMILY.bold,
    fontSize: 15,
    color: COLOR.dark,
  },
  pointImgStyle:{
    width:22,
    height:22,
    marginRight:12
  },
  rows:{ 
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:8
  }
  });
  