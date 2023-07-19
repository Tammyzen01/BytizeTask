import React, {createRef} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {Container, Content, View} from 'native-base';
import {styles} from './styles';
import theme from '@theme/styles';
import {openDrawer} from '@utility/navigation';
import List from './List';
import {getList} from '@api';
import LottieView from 'lottie-react-native';
import {
  MENU_ICON,
  ADD_ICON,
  HOME_HEADING,
  BACK,
  NAME,
  NO_DATA_FOUND,
  LOADING,
  ADD,
  UPDATE,
  ERR_MSG_NAME
} from '@constant';

const {width} = Dimensions.get('window');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isShow: false,
      name: '',
      expertId: '',
      listData: [],
      isUpdate: false,
      id: '',
    };
  }

  async componentDidMount() {
    this.getList();
  }

  getList = () => {
    this.setState({isLoading: true});
    getList()
      .then(res => {
        const {result} = res;
        this.setState({listData: result});
        this.setState({isLoading: false});
      })
      .catch(err => {
        this.setState({isLoading: false});
      });
  };

  addName = async () => {
    const {name, listData} = this.state;
    let id = Math.round(Math.random() * 108);
    if (name) {
      let arr = listData;
      let data = {
        show: {id, name},
      };
      arr.push(data);
      this.setState({listData: arr});
      this.setState({isShow: false, name: ''});
    } else {
      ToastAndroid.show(ERR_MSG_NAME, ToastAndroid.SHORT);
      return false;
    }
  };

 updateName  = () => {
    const {name, id, listData} = this.state;
    if (name) {
      for (let index = 0; index < listData.length; index++) {
        if (id == listData[index].show.id) {
          listData[index].show.name = name;
        }
      }
      this.setState({isShow: false, name: ''});
    } else {
      ToastAndroid.show(ERR_MSG_NAME, ToastAndroid.SHORT);
      return false;
    }
  };

  remove = async id => {
    this.setState({isLoading: true});
    const {listData} = this.state;
    let arr = listData.filter(data => id != data.show.id);
    this.setState({listData: arr});
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 100);
  };

  openEdit = data => {
    const {name, id} = data;
    this.setState({name, id, isUpdate: true, isShow: true});
  };

  renderPreference = () => {
    const {isShow, name, listData, isUpdate} = this.state;
    return (
      <>
        {!isShow ? (
          listData.length > 0 ? (
            <List
              data={listData}
              remove={data => this.remove(data)}
              edit={data => this.openEdit(data)}
            />
          ) : (
            <View style={styles.lottieView}>
              <Text style={styles.noText}>{NO_DATA_FOUND}</Text>
            </View>
          )
        ) : (
          <View style={styles.specificView}>
            <View style={styles.fieldView}>
              <View style={styles.formContent}>
                <View style={styles.sideTextView}>
                  <View>
                    <Text style={styles.fieldHeading}>{NAME}</Text>
                    <View style={styles.formInputGroup}>
                      <TextInput
                        placeholder={'name'}
                        style={styles.formInputText}
                        placeholderTextColor="#a9a9a9"
                        value={name}
                        onChangeText={name => this.setState({name})}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.createbtnView}>
              <TouchableOpacity
                style={styles.createBtnActive}
                activeOpacity={0.8}
                onPress={() =>
                  isUpdate ? this.updateName() : this.addName()
                }>
                <Text style={styles.createBtnText}>
                  {isUpdate ? UPDATE : ADD}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </>
    );
  };

  render() {
    const {isLoading, isShow} = this.state;
    let renderItem = this.renderPreference();
    return (
      <Container>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 1)"
          animated
          barStyle="light-content"
        />
        <Content
          contentContainerStyle={[theme.layout, {backgroundColor: '#fff'}]}>
          <View style={styles.headerView}>
            {isShow ? (
              <TouchableOpacity
                onPress={() => this.setState({isShow: false})}
                style={styles.backView}>
                <Text style={styles.backText}>{BACK}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={openDrawer} style={styles.iconView}>
                <Image source={MENU_ICON} style={styles.notyIcon} />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => this.setState({isShow: true, isUpdate: false})}
              style={styles.proIconView}>
              <Image source={ADD_ICON} style={styles.proIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerVieww}>
            <Text style={styles.backText}>{HOME_HEADING}</Text>
          </View>
          {isLoading ? (
            <View style={styles.lottieView}>
              <LottieView
                style={{height: 120, width: width}}
                source={LOADING}
                autoPlay
                loop
              />
            </View>
          ) : (
            renderItem
          )}
          <View style={{margin: 10}} />
        </Content>
      </Container>
    );
  }
}
