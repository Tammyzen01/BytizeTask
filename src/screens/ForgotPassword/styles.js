import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform,Dimensions } = React;
const { width } = Dimensions.get('window')
export default {
    homeFirstView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:width,
        padding:10,
        backgroundColor:'#fff',
      },
      locView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor:'#fff',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
        alignItems: 'center',
    },
    formHeader: {
        width:'100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        marginBottom: 30
    },
    backHeadView:{
        width:width,
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: 38,
        color: '#000'
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: 17,
        color: COLOR.dark,
        textAlign:'center',
        letterSpacing:.8
    },
    formHeaderDesc: {
        marginTop:55,
        fontFamily: FAMILY.bold,
        fontSize: 17,
        color: '#de5ea2',
        textAlign:'center',
        letterSpacing:.9
    },
    formContent: {
        marginTop:50,
        width: '86%',
    },
    formInputGroup: {
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 25,
        marginBottom: 10,
        height:50,
        elevation:12,
        marginBottom:32
          },
      formInputText: {
        flex: 1,
        fontSize: 15,
        color: '#000',
      
        paddingLeft: 20,
        paddingRight: 20,
      },
    formInputIcon: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: SIZE.huge,
        color: '#000',
    },
    
    formBtn: {
        flexDirection: 'row',
        backgroundColor: COLOR.default,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 25,
        elevation:12
    },
    forgot: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnForgot: {
        fontFamily: 'Montserrat-Regular',
        color:'#8A8A8F',
        paddingVertical: 15,
        textAlign: 'right',
        fontSize: 13,
    },
    formBtnIcon: {
        fontSize: SIZE.huge,
        color: COLOR.dark
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: '#fff',
        fontSize:18
    },
    formFooterContent:{
        marginTop:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        alignSelf: 'center',
    },
    formFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formFooterText: {
        fontFamily: FAMILY.regular,
        fontSize: 17,
        color: '#666666',
        textAlign:'center'
    },
    formFooterBtn: {
        paddingHorizontal: 10
    },
    formFooterBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: 17,
        color: '#000'
    },
    forgotBtn: {
    },
    forgotBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
    smnInfo: {
        marginTop: 5
    },
    smnText: {
        fontFamily: FAMILY.bold,
        fontSize: 13,
        color: COLOR.default,
        alignSelf: 'center',
        marginBottom:12
    },
    smnText2: {
        fontFamily: FAMILY.bold,
        fontSize: 13,
        color: '#444',
        alignSelf: 'center',
        marginBottom:12
    },
    iconInfo: {
        justifyContent: 'center',
        paddingVertical: 5,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    smnBtn: {
        flexDirection: 'row',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width:35,
        height:35,
        marginLeft:10,
        borderWidth: 1,
        borderColor:'#a9a9a9',
    },
    smnBtnText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light,
        paddingLeft: 5
    },
    smnBtnIcon: {
        fontSize: 33,
        color: 'rgb(66, 103, 178)',
    },
    googleIcon: {
        width:30,
        height:30
    },
    twitterIcon: {
        backgroundColor: 'rgb(85, 173, 238)'
    },
    fbIcon: {
        backgroundColor: 'rgb(66, 103, 178)'
    },
    accountText: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.small,
        color: COLOR.light
    },
/* modal */
    modalContainer: {
        width: '86%',
        height: '44%',
        borderRadius: 5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalHeaderBtn: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    modalContentIcon: {
        fontSize: SIZE.big,
        paddingVertical: 20
    },
    modalContentTitle: {
        //fontFamily: FAMILY.bold,
        fontSize: SIZE.huge,
        color: COLOR.dark,
        marginBottom: 10
    },
    modalContentDesc: {
        fontFamily: FAMILY.regular,
        fontSize: SIZE.medium,
        color: COLOR.grey,
        textAlign: 'center',
        lineHeight: 18
    },
    titleView:{
        marginTop:10,
        width:'83%',
        alignItems: 'flex-start',
    }
}