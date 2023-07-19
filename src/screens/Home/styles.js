import { StyleSheet,Dimensions } from 'react-native'
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    lottieView: {
        flex:1,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      noText:{
        marginTop:-58,
        fontFamily: FAMILY.bold,
          fontSize: 14,
          color: COLOR.dark,
          opacity:.3
      },
      specificView:{

        flex: 1,
          width: WIDTH,
          alignItems: 'center'
      },
      fieldView: {
        marginTop:15,
        paddingBottom: 18,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 12,
        paddingHorizontal: 18,
        marginBottom: 28,
      },
      formContent: {
        width: '100%',
      },
      sideTextView: {
        marginTop: 20,
        justifyContent: 'center',
      },
      fieldHeading: {
        marginTop: 10,
        fontSize: 13,
        fontFamily: FAMILY.medium,
        color: '#000',
        marginBottom: 8,
        textTransform: 'uppercase',
        opacity:.8
      },
      formInputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#1091fe',
        borderWidth:2,
        marginBottom: 10,
        height: 50,
        borderRadius: 25,
        paddingLeft:18,
        paddingHorizontal: 10
      },
      formInputText: {
        flex: 1,
        fontFamily: FAMILY.regular,
        color: COLOR.dark,
        fontSize: 13,
      },
      createbtnView:{
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
      },
      createBtnActive:{
        width:'96%',
        height:50,
        borderRadius:12,
        backgroundColor:COLOR.default,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
      },
      createBtnText:{
        fontFamily: FAMILY.bold,
        fontSize: 18,
        color:'#fff'
      },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    foryouMain: {
        marginVertical: 0,
        width:WIDTH,
        alignItems: 'center',
      },
      newBoxView:{
        width:'90%',
        height:80,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
        elevation:8,
        marginTop:8,
        marginBottom:8,
        flexDirection: 'row',
        paddingHorizontal:8,
        borderRadius:8,
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
      headerView: {
        justifyContent: 'space-between',
        width: WIDTH,
        paddingHorizontal: 5,
        paddingVertical: 10,
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        },
        headerVieww:{
            width: WIDTH,
            margin: 15,
        },
      backView:{
        marginTop:12,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
      },
      firstRow2:{
        flexDirection: 'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'
      },
      newIdText:{
       
        fontFamily: FAMILY.bold,
         fontSize:15,
         color:COLOR.dark
       },
       newIdText2:{
        fontFamily: FAMILY.bold,
         fontSize:12,
         color:'#a9a9a9'
       },
       newDimText:{
        fontSize:12,
        color:"#000"
      },
      btnMainView:{
        width:'20%',
        paddingTop:5,
        height:'90%',
        justifyContent:'space-around'
      },
      textView:{
        width:'80%',
      },
      btnView:{
        height:25,
        paddingHorizontal:10,
        backgroundColor:COLOR.default,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        elevation:8
      },
      btnText:{
        fontFamily: FAMILY.medium,
         fontSize:12,
         color:'#fff'
      },
      proIconView:{
        width:40,
        height:40,
        backgroundColor: '#fff',
        marginRight:15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      proIcon:{
        width:38,
        height:38,
        borderRadius:50
      },
      iconView:{
        width:40,
        height:40,
        backgroundColor: '#fff',
        marginLeft:15,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
     notyIcon:{
        width:26,
        height:26,
        borderRadius:15
      },
})