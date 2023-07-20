import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require("react-native");
const { Platform, Dimensions } = React;
const { width } = Dimensions.get('window')

export default {
    formContainer: {
        flex:1,
        width: width,
        zIndex: 2,
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#fff'
    },
    formHeader: {
        width: 160,
        height: 100,
    },
    formHeaderTitle: {
        fontFamily: FAMILY.bold,
        fontSize: 38,
        color: '#000'
    },
    orText: {
        fontFamily: FAMILY.bold,
        fontSize: 16,
        color: '#000'
    },
    formHeaderDesc: {
        fontFamily: FAMILY.bold,
        fontSize: 20,
        color: '#000'
    },
    formContent: {
        marginTop: 30,
        width: '85%',
    },
    formInputGroup: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        marginBottom: 10,
        height: 50,
        paddingHorizontal: 10,
        elevation:18
    },
    formInputGroup2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        height: 50,
        paddingHorizontal: 10,
        paddingTop: 18,
    },
    formInputText: {
        flex: 1,
        fontSize: 15,
        color: '#000',
        paddingLeft: 5,
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
        elevation: 12
    },
    forgot: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnForgot: {
        fontFamily: FAMILY.bold,
        color: COLOR.default,
        paddingVertical: 18,
        textAlign: 'right',
        fontSize: 15,
    },
    formBtnIcon: {
        fontSize: SIZE.huge,
        color: COLOR.dark
    },
    formBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: SIZE.medium,
        color: '#ffff',
        fontSize: 18
    },
    formFooterContent: {
        
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
        color: '#000',
        textAlign: 'center'
    },
    formFooterBtn: {
        paddingHorizontal: 10
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
        marginBottom: 12
    },
    smnText2: {
        fontFamily: FAMILY.bold,
        fontSize: 13,
        color: '#444',
        alignSelf: 'center',
        marginBottom: 12
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
        width: 35,
        height: 35,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#a9a9a9',
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
        width: 30,
        height: 30
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
    titleView: {
        width: '83%',
        alignItems: 'center',
    },
    termView: {
        marginTop: -10,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    smnText1: {
        fontFamily: FAMILY.regular,
        fontSize: 13,
        color: '#000',
        marginRight: 8
    },
    formFooterBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: 13,
        color: COLOR.default,
        letterSpacing: .5
    },
    callBtn: {
        flexDirection: 'row',
        backgroundColor: '#27BCBA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 15
    },
    callBtndim: {
        flexDirection: 'row',
        backgroundColor: '#27BCBA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 8,
        opacity: .5
    },
    callBtnText: {
        fontSize: SIZE.medium,
        color: '#fff',
        fontSize: 18
    },
    iconStyle3: {
        fontSize: 28,
        color: '#fac625',
        elevation: 8,
        marginRight: 15
    },
    formFooterText2: {
        fontFamily: FAMILY.bold,
        fontSize: 13,
        color: COLOR.default,
        letterSpacing: .5
    },
    subscriptionModal: {
        width: '70%',
        height: 180,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
    closeSortDescView: {
        width: '100%',
        alignItems: 'flex-end'
    },
    submitBtnView: {
        marginTop: 6,
        alignItems: 'center',
    },
    TitleView: {
        width: '100%',
        alignItems: 'center',
        marginTop: -10,
        marginBottom: 10
    },
    browserText: {
        fontFamily: FAMILY.bold,
        fontSize: 30,
        color: '#fff'
    },
    modalBtn: {
        width: '100%',
        backgroundColor: COLOR.default,
        paddingVertical: 12,
        borderRadius: 12,
        marginVertical: 8,
        paddingHorizontal: 12,
        elevation: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtnText: {
        fontFamily: FAMILY.bold,
        fontSize: 14,
        color: COLOR.light,
        textAlign: 'center',
        letterSpacing: .6
    },
    squareMainView: {
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        backgroundColor: '#fff',
        elevation:8,
        borderColor: '#a4cc30',
        borderWidth:1,
    },
    tickImage: {
        width: 18,
        height: 18,
        marginBottom: 5,
        marginLeft: 5
    },
    country_text: {
        fontSize: 16,
        borderBottomWidth: 1,
        paddingBottom: 8,
        height: 35,
        fontFamily: FAMILY.regular,
        color: '#000',
    },
    flag_style: {
        width: 35,
        height: 24,
        marginTop: -18,
    },
    FooterView: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        width: '100%',
        height: '100%',
    }
}