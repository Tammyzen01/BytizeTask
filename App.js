import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import DrawerContent from '@component/Menu/Left';
import {navigationRef} from '@utility/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import LottieView from 'lottie-react-native';
import {COLOR, FAMILY, SIZE} from '@theme/typography';
import {NO_NET, NET_LOST_TITLE, NET_LOST_CONTENT, RETRY} from '@constant';

//screens

import Home from '@screen/Home';
import SignIn from '@screen/SignIn';
import ForgotPassword from '@screen/ForgotPassword';
import About from '@screen/About';
import ListView from '@screen/ListView'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {width, height} = Dimensions.get('window');

function DrawerRoot() {
  return (
    <Drawer.Navigator
      initialRouteName="Drawer"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{width: width - 100}}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      network: true,
    };
    
  }

  async componentDidMount() {
    const userId = await AsyncStorage.getItem('userId');
    this.setState({userId});
    await this.checkIsAppInitiated();
    setInterval(() => {
      NetInfo.addEventListener(this.handleConnectivityChange);
    }, 1000);
  }

  componentWillUnmount() {
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = state => {
    this.setState({network: state.isConnected});
  };

  handleTryAgain = () => {
    NetInfo.addEventListener(this.handleConnectivityChange);
  };
  async checkIsAppInitiated() {
    this.setState({
      isAppInitiated: true,
    });
  }

  render() {
    if (!this.state.isAppInitiated) {
      return null;
    }

    const {userId, network} = this.state;
    let INITIAL;
    if (userId == '' || userId == null) {
      INITIAL = 'SignIn';
    } else {
      INITIAL = 'Drawer';
    }

    return !network ? (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <LottieView
            style={{height: 150, width: width}}
            source={NO_NET}
            autoPlay
            loop
          />
          <View style={styles.contentView}>
            <Text style={styles.title}>{NET_LOST_TITLE}</Text>
            <Text style={styles.content}>{NET_LOST_CONTENT}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => this.handleTryAgain()}>
            <Text style={styles.btnText}>{RETRY}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={INITIAL}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Drawer" component={DrawerRoot} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="ListView" component={ListView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    height: height / 1.8,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  lottieView: {
    flex: 1 / 2,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  contentView: {
    width: width,
    alignItems: 'center',
  },
  title: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
  },
  content: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.dark,
  },
  btnView: {
    flexDirection: 'row',
    backgroundColor: COLOR.default,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 180,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 25,
    fontFamily: FAMILY.semiBold,
  },
  btnText: {
    fontFamily: FAMILY.semiBold,
    fontSize: SIZE.medium,
    color: '#fff',
  },
});
