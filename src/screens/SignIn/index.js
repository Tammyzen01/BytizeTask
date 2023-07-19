import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import {Container, Content,  Text, View} from 'native-base';
import styles from './styles';
import {navigate} from '@utility/navigation';
import theme from '@theme/styles';
import AsyncStorage from '@react-native-community/async-storage';
import { LOGO, SIGN_IN, LOGIN_TO, VALID_EMAIL, VALID_PASSWORD, USER_ID, ERR_MSG, ERR_MSG_EMAIL, ERR_MSG_PASSWORD } from '@constant'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  async componentDidMount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    return BackHandler.exitApp();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  validation = () => {
    const {email, password} = this.state;
    if (email && password) {
      this.onSignIn();
    } else {
      if (!email) {
        ToastAndroid.show(ERR_MSG_EMAIL, ToastAndroid.SHORT);
        return false;
      }
      if (!password) {
        ToastAndroid.show(ERR_MSG_PASSWORD, ToastAndroid.SHORT);
        return false;
      }
    }
  };

  async onSignIn() {
    const {email, password} = this.state;
    if (email == VALID_EMAIL && password == VALID_PASSWORD) {
      await AsyncStorage.setItem('userId', USER_ID);
      navigate('Home');
    } else {
      ToastAndroid.show(ERR_MSG, ToastAndroid.SHORT);
    }
  }

  render() {
    const {isLoading} = this.state;
    return (
      <Container style={theme.layoutFx}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Content contentContainerStyle={theme.layout}>
          <View style={styles.formContainer}>
            <View>
              <View style={styles.titleView}>
                <Text style={styles.formHeaderDesc}>{LOGIN_TO}</Text>
              </View>
              <View style={styles.formHeader}>
                <Image
                  source={LOGO}
                  style={styles.logoImg}
                />
              </View>
            </View>

            <View style={styles.formContent}>
              <View style={styles.formInputGroup}>
                <TextInput
                  placeholder="Email"
                  style={styles.formInputText}
                  keyboardType="email-address"
                  placeholderTextColor="#949499"
                  onChangeText={email => this.setState({email})}
                />
              </View>

              <View style={styles.formInputGroup}>
                <TextInput
                  placeholder="Password"
                  style={styles.formInputText}
                  secureTextEntry={true}
                  placeholderTextColor="#949499"
                  onChangeText={password => this.setState({password})}
                />
              </View>
              <View style={{margin: 30}} />
              <TouchableOpacity
                style={styles.formBtn}
                onPress={() => this.validation()}>
                {isLoading ? (
                  <ActivityIndicator color="#f68d1e" size="small" />
                ) : (
                  <Text style={styles.formBtnText}>{SIGN_IN}</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
