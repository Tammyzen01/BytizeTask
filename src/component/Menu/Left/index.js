import React, { Component } from 'react'
import { Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import { Text, Icon, View } from 'native-base'
import * as MENU from './Menu'
import styles from './styles'
import { closeDrawer, navigate } from '@utility/navigation'
import AsyncStorage from '@react-native-community/async-storage'

class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
    this.renderMenuList = this.renderMenuList.bind(this)
  }

  renderMenuList(menus) {
    return menus.map((menu) => {
      return <TouchableOpacity
        style={styles.drawerContent} underlayColor='transparent' onPress={async () => {
          if (menu.name == 'Logout') {
            await AsyncStorage.setItem("userId", '');
            navigate("SignIn")
            ToastAndroid.show('Logout successfully',ToastAndroid.SHORT)
          } else {
            closeDrawer()
            navigate(menu.route)
          }
        }}
      >
        <View style={styles.col}>
          <Icon name={menu.iconName} type={menu.iconType} style={styles.itemIcon} />
        </View>
        <Text style={styles.itemText}>{menu.name}</Text>
      </TouchableOpacity>
    })
  }

  render() {
    const { Menu } = MENU
    return (
      <View style={styles.nav}>
        <View style={styles.navProfile}>
          <Image source={require('../../../assets/Images/logo.png')} resizeMode='contain' style={styles.DrawerPicture} />
        </View>
        <View style={styles.navMenu}>
          <ScrollView>
            {this.renderMenuList(Menu)}
          </ScrollView>
        </View>
      </View>

    )
  }
}

export default MenuLeft
