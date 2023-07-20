
import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const React = require('react-native')
const { Dimensions } = React;
const { width } = Dimensions.get("window");

export default {

  // Content//

  // Location//
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#28527a',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    paddingLeft: 5
  },
  locationText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    paddingLeft: 5
  },
  changeBtn: {
  },
  changeBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  // Delivery//
  deliveryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.smoke,
    backgroundColor: '#FFF',
    elevation: 20,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  deliveryText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark
  },
  nowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.blue,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginLeft: 5
  },
  nowButtonText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
    paddingRight: 5
  },
  timeText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.greyDark,
    marginHorizontal: 10
  },
  // Convenience//
  convenienceItem: {
    marginBottom: 30
  },
  convenienceHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    paddingLeft: 15,
    marginBottom: 15
  },
  convenienceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  convenienceDetail: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  bulkItem: {
    backgroundColor:'#11698e',
    elevation:8
  },
  nowItem: {
    backgroundColor: '#1e212d',
    elevation:8

  },
  buyItem: {
    backgroundColor: '#f05454',
    elevation:8

  },
  convenienceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5

  },
  convenienceTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  convenienceText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light
  },
  //Btn//
  btnItem: {
    marginTop:-10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal:15,
    borderRadius:5,
    backgroundColor: '#1e212d'
  },
  btnItemTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  btnItemText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    letterSpacing:1.8
  },
  loginBtn: {
    padding: 5,
    backgroundColor: COLOR.light,
    borderRadius:3,
  },
  loginBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: '#1e212d'
  },
  // Feature//
  featureGroup: {
    paddingLeft:0,
    paddingRight:0
  },
  featureContainer: {
    height:220,
    width: width,
    elevation:5
  },
  featureContent: {
    width: width,
    justifyContent: 'center',
    overflow: 'hidden',
    height: 200,
    borderRadius: 10,
    // backgroundColor:'#fff',
    elevation:8
  },
  backgroundImage:{
    width: width,
    resizeMode: 'cover',
    height:200
  },
  featureInfo: {
    position: 'absolute',
    top: 50,
    width: 355,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  featureImg: {
    position: 'absolute',
    width: 160,
    height: 150,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  featureTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.dark,
    width:200,
    letterSpacing: 1,
    marginBottom: 5
  },
  featureDate: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginBottom: 10
  },
  featureOfferNum: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.dark
  },
  featureOfferText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  featureShopBtn: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderRadius: 3,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // borderWidth:2,
    // borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureShopBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    marginRight: 8,
  },
  /*Electronic*/
  electronicGroup: {
    paddingRight: 20,
  },
  electronicHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  electronicHeaderText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.greyDark
  },
  seeBtn: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.default
  },
  electronicRow: {
    position: 'absolute',
    flex: 1,
    width: 220,
    height: 150,
    borderRadius: 10,
  },
  electronicContainer: {
    paddingVertical: 30,
    
  },
  electronicContent: {
    marginLeft: 20
  },
  electronicBg: {
    flex: 1,
    width: width-20,
    height: 150,
    borderRadius: 10,
    backgroundColor:'#f5f4f4',
  },
  electronicInfo: {
    position: 'absolute',
    bottom: 30,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  electronicTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.dark,
    letterSpacing: 0.5,
    marginBottom: 5
  },
  electronicOfferNum: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraHuge,
    color: COLOR.dark
  },
  electronicOfferText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  electronicImg: {
    width: 100,
    height: 100,
    marginVertical: 25,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  /*Ads*/
  adsContainer: {
    paddingVertical: 10,
    width: width,
    justifyContent: 'center',
    elevation:5
  },
  adsContent: {
    marginLeft: 15
  },
  adsImg: {
    width: width-28,
    height: 100,
    borderRadius: 10,
  },
  /**Essentials */
  essentialHeader: {
    marginBottom: 20,
    marginHorizontal: 20
  },
  essentialTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    textTransform: 'uppercase'
  },
  essentialContainer: {
    paddingBottom: 20,
    width: width,
    height:200,
    overflow:'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation:5
  },
  essentialContent: {
    width: width - width/2,
    marginLeft: 12,
  },
  essentialImg: {
    flex: 1,
    width:  width - width/2,
    height: 190,
    borderRadius: 10,
    
    position: 'absolute',
    resizeMode: 'stretch',
  },
  essentialOverlay: {
    width:  width - width/2,
    height: 190,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  essentialRow: {
    width: width - width/2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:190
  },
  essentialInfo: {
    marginTop: 50,
    marginLeft: 15,
    alignItems: 'flex-start',
    justifyContent:'flex-end',
    width: '100%',
  },
  essentialText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.light,
  },
  essentialImgRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width - width/2,
  },
  essentialImageBg: {
    width: 74,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#28527a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:15,
    elevation:6
  },
  essentialImg2: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginBottom: 3
  },
  essentialImageText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.tiny,
    color: COLOR.light,
    textAlign: 'center'
  },

  // --Product--//
  productHeader: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  productHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    marginBottom: 15
  },
  productGroup: {
    paddingRight: 20
  },
  productContent: {
    width: 200,
    borderColor: COLOR.smokeLight,
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#999',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 10,
    marginBottom: 30
  },
  productImg: {
    width: 200,
    height: 130,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  productIconBg: {
    position: 'absolute',
    right: 0,
    backgroundColor: COLOR.lightGreen,
    borderRadius: 5,
    margin: 5,
    padding: 5
  },
  productItem: {
    flex: 8,
    padding: 20
  },
  nowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: COLOR.blue,
    borderBottomLeftRadius: 5,
    marginBottom: 20
  },
  nowBtnIcon: {
    fontSize: SIZE.compact,
    color: COLOR.blue,
    marginRight: 3
  },
  nowBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.tiny,
    color: COLOR.blue,
  },
  cartBtnText: {
    fontSize: SIZE.compact,
    color: COLOR.light,
    marginRight: 3
  },
  groceryTitle: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    marginBottom: 10
  },
  pieceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  pointText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    paddingRight: 10
  },
  kgNum: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey,
  },
  addBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#28527a',
    borderRadius: 3,
    marginTop: 30,
    // borderWidth:1,
    // borderColor:'#000',
    flexDirection:'row',
    justifyContent:'space-around',
    elevation:10
  },
  addBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light,
  },
  /* Top Category */
  categoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  categoryHeader: {
    marginBottom: 20
  },
  categoryTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    textTransform: 'uppercase'
  },
  categoryContent: {
    flex: 1,
    marginHorizontal: -5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  categoryItem: {
    width: '48%',
    margin: '1%',
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  categoryImg: {
    width: '100%',
    height: 110,
    borderRadius: 5
  },
  categoryOverlay: {
    width: '100%',
    height: 110,
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 5
  },
  categoryName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light,
    textAlign: 'left',
    marginLeft: 10,
    letterSpacing:2
  },
  homeFirstView:{
    position:'absolute',
    flexDirection: 'row',
    justifyContent:'space-between',
    width:width,
    paddingLeft:20,
    paddingTop:10
  },
  iconStyle:{
    color:'#8A8A8F'
  },
  iconStyle2:{
    fontSize:22,
    marginLeft:15,
    color:COLOR.default,
    elevation:8,
  },
  iconStyle3:{
    marginTop:5,
    marginLeft:5,
    color:'#000',
    fontSize:30,
    fontFamily: FAMILY.bold,
    backgroundColor:'#fff',
    elevation:8,
    borderRadius:25
  },
  iconStyle4:{
    fontSize:25,
    color:'#fff',
    elevation:8,
   
  },
  locView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  LocationText:{
    fontFamily:FAMILY.regular,
    fontSize:17
  },
  homeSecondView:{
    marginTop:-15,
    width:width,
    paddingHorizontal:20
  },
  browserText:{
    fontFamily: FAMILY.bold,
    fontSize: 25,
    color: '#000'
  },
  categoriesTitle:{
    fontFamily: FAMILY.regular,
    fontSize:13,
  },
  categoriesBg:{
    backgroundColor: '#EFEFF4',
    fontSize:18,
    paddingHorizontal:20,
    height:30,
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10
  },
  nearByView:{
    marginTop: 15,
    width:100,
    alignItems: 'center',
  },
  nearDocText:{
    fontFamily: FAMILY.regular,
    fontSize:13,
    width:70,
    textAlign:'center'
  },
  nearPro:{
    width:64,
    height:64,
    borderRadius:50
  },
  nearStar:{
    color:'#FF9500',
    fontSize:16
  },
  homeThirdView:{
    width:width,
    padding:20,
  },
  homeThirdBox:{
    backgroundColor: COLOR.default,
    borderRadius:12,
    height:94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sirenImg:{
    width:50,
    height:50
  },
  emergencyText:{
    color:'#fff',
    fontFamily:FAMILY.bold,
    fontSize:17
  },
  sirenText:{
    color:'#fff',
    fontFamily:FAMILY.regular,
    fontSize:15,
    letterSpacing:.5
  },
  topRatedMainView:{
    width:width,
paddingHorizontal: 10,
alignItems: 'center',
  },
  topRatedView:{
    marginTop:-10,
    width:'98%',
    padding: 10,
    backgroundColor:'#fff',
    marginBottom:7,
    borderRadius:8
  },
  topRatedContentView:{
    flexDirection:'row',
    alignItems: 'center',
  },
  favActiveIcon: {
    fontSize: SIZE.huge,
    color: COLOR.red
  },
  row:{
    marginLeft:-5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRatedDocName:{
    fontFamily:FAMILY.bold,
    fontSize:15
  },
  topRatedGreyText:{
    fontFamily:FAMILY.regular,
    fontSize:13,
    color:'#666666'
  },
  topRatedIcon:{
    color:'#a9a9a9',
    fontSize:18
  },
  topRatedImg:{
    width:width,
    height:250,
    marginBottom:30
  },
  homeFourthView:{
    marginTop:-15,
    width:width,
    padding: 20,
  },
  homeFourthBox:{
    backgroundColor: '#F9F9F9',
    borderRadius:5,
    height:44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth:1,
    borderColor:'#EFEFF4'
  },
  box1:{
    width:'40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:10
  },
  boxIcon:{
    fontSize:13,
  color:'#8A8A8F'
  },
  box2:{
    width:'30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:30
  },
  boxIcon2:{
    fontSize:20,
    color:'#8A8A8F'
  },
  box3:{
    width:'30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:26
  },
  verticalBar:{
    height: '100%',
    width: 1,
    backgroundColor: '#EFEFF4',
  },
  categoriesImg:{
    width:21,
    height:28
  },
  docText:{
    fontFamily:FAMILY.medium,
    fontSize:13
  },
  docTextGrey:{
    marginTop:-5,
    fontFamily:FAMILY.medium,
    fontSize:13,
    color:'#8A8A8F'
  },
  formBtn: {
    flexDirection: 'row',
    backgroundColor: COLOR.default,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5
},
formBtnText: {
  //fontFamily: FAMILY.bold,
  fontSize: SIZE.medium,
  color: COLOR.light,
  fontSize:18
},

modal: {
  width: '75%',
  height: 220,
  borderRadius: 10,
  paddingHorizontal:10,
  alignItems: 'center',
  justifyContent: 'center',
},
closeSortDescView:{
  width:'100%',
  alignItems:'flex-end'
},
closeSortDesc: {
  marginVertical: 10,
  alignItems: 'center',
  marginTop:20,
  justifyContent: 'center',
  backgroundColor: COLOR.default,
  width:30,
  height:30,
  borderRadius:10,
  elevation:12
},
submitBtnView: {
  marginTop:6,
},
TitleView:{
 width:'100%',
 alignItems:'center',
 marginTop:-10,
 marginBottom:10
},
TitleText:{
 fontFamily: FAMILY.bold,
 fontSize: 16,
 color: COLOR.dark,
 textAlign: 'center',
 letterSpacing:.8
},
modalBtn: {
  backgroundColor: COLOR.default,
  paddingVertical: 12,
  borderRadius: 25,
  marginVertical: 15,
  elevation:12,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
submitBtnText: {
  fontFamily: FAMILY.bold1,
  fontSize: 14,
  color: COLOR.light,
  textAlign: 'center'
},
categoriesImgBg:{
  width:65,
  height:65,
  backgroundColor:COLOR.default,
  borderRadius:12,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:10
},
categoriesImg:{
  width:21,
  height:28
},
boxView:{
  marginTop:20,
  width:'100%',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}
}
