import React from 'react'
import {  TouchableOpacity, TextInput, ToastAndroid,ActivityIndicator } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import styles from './styles'
import { navigate,back } from '@utility/navigation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mobile:'',
      isLoading:false
    }
  }



  ValidateNumber(){
    const { mobile } = this.state
    this.setState({ isLoading:true })
  if(!mobile){
    ToastAndroid.show('Please enter number',ToastAndroid.SHORT)
    this.setState({ isLoading:false })
  }else if(mobile.length <= 9){
  ToastAndroid.show('Please enter a valid number',ToastAndroid.SHORT)
  this.setState({ isLoading:false })
    }else{  
        this.updateForgetPassword()
    }
  }

  render() {
    const { isLoading } = this.state
    return (
      <Container>
        {/* <Header navLeftType='back' statusBarType='dark' navMiddleType='medium' title='Forgot Password'/> */}

        <Content contentContainerStyle={{ flex:1 }}>
          <View style={styles.formContainer}>
        <View style={styles.homeFirstView}>
       <View style={styles.locView}>
        <TouchableOpacity style={styles.backHeadView} onPress={back}>
          <Icon name='chevron-left' type='Entypo' style={styles.iconStyle3} />
          <Text style={styles.formHeaderTitle}>Forgot password</Text>
        </TouchableOpacity>
      </View>
      </View>
            <View style={styles.titleView}>
            <Text style={styles.formHeaderDesc}>Enter your registered number and will send you the OTP to reset it</Text>
            </View>

            <View style={styles.formContent}>
              <View style={styles.formInputGroup}>
                <TextInput 
                placeholder='Number'
                style={styles.formInputText} 
                placeholderTextColor='#949499'
                value={this.state.mobile}
                maxLength={10}
                keyboardType='numeric'
                onChangeText={mobile => this.setState({ mobile })}
                 />
              </View>
              <TouchableOpacity style={styles.formBtn} onPress={()=>this.ValidateNumber()}>
               {isLoading?<ActivityIndicator color='#fff' size='small' /> :<Text style={styles.formBtnText}>Send</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </Content>
   
      </Container >
    )
  }
}
