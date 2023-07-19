import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {
  drawerContent:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  col:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemIcon:{
    color: COLOR.white,
    fontSize: 20
  },
  itemText:{
    fontSize: 15,
      fontFamily: FAMILY.bold,
    color: COLOR.white, 
    marginLeft: 20
  },
  nav: {
    flex: 1,
    width: '100%',
  },
  navProfile: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  DrawerPicture: {
    width: '80%',
    height: '100%',
  },
  navMenu: {
    flex: 1,
    backgroundColor: COLOR.default,
    paddingTop:50,
    paddingBottom: 30,
    justifyContent: 'center',
  },
  HorizontalLine:{
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 1.5,
    marginBottom:10,
    opacity:0.2
  },
  itemLabel:{
    fontSize: 12,
    color: '#444',
    marginLeft: 15
  }
}
