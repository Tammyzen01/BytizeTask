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
import { LOGO, SIGN_IN, LOGIN_TO, VALID_EMAIL, VALID_PASSWORD, USER_ID, ERR_MSG, ERR_MSG_EMAIL, ERR_MSG_PASSWORD, TICK_ICON  } from '@constant'

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      check:''
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
    console.log(email , VALID_EMAIL , password , VALID_PASSWORD,email == VALID_EMAIL && password == VALID_PASSWORD)
 
      if (email == VALID_EMAIL && password == VALID_PASSWORD) {
        await AsyncStorage.setItem('userId', USER_ID);
        navigate('Home');
      } else {
        ToastAndroid.show(ERR_MSG, ToastAndroid.SHORT);
      }
 
  }

  render() {
    const { isLoading, check } = this.state;
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
              <TouchableOpacity style={styles.forgot} onPress={() => { navigate('ForgotPassword') }}>
                <Text style={styles.btnForgot}>Forgot Password ?</Text>
              </TouchableOpacity>
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

            <View style={styles.FooterView}>

<View style={styles.termView}>
  <TouchableOpacity style={styles.squareMainView} onPress={() => this.setState({ check: !check })}>
    {this.state.check ? <Image source={TICK_ICON } style={styles.tickImage} /> : null}
  </TouchableOpacity>
  <Text style={styles.smnText1}> I agree to the</Text>
  <TouchableOpacity onPress={() => {}}>
    <Text style={styles.formFooterText2}>Terms & condition</Text>
  </TouchableOpacity>
</View>

</View>

          </View>
        </Content>
      </Container>
    );
  }
}
