import React from 'react';
import {
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Container, Content, Icon, View} from 'native-base';
import styles from './styles';
import TopRated from './List';
import theme from '@theme/styles';
import {back, openDrawer} from '@utility/navigation';
import request from '@utility/request';
import topRatedList from './data/topRated';
import {MENU_ICON} from '@constant';

export default class extends React.Component {
  constructor(props) {
    super(props);
    let route = props.route ? props.route : {};
    let params = route.params ? route.params : {};
    this.title = params.title ? params.title : 'Doctors';
    this.state = {
      selected: '',
      visibleDailyReminder: false,
      isDisabled: false,
      isOpen: false,
      TopRatedList: [],
      fetchingTopRatedList: true,
    };
  }

  showDailyReminder() {
    this.setState({
      visibleDailyReminder: true,
    });
  }

  onChangeDailyReminder() {
    this.setState({
      visibleDailyReminder: false,
    });
  }

  onValueChange() {
    this.setState({
      selected: '',
    });
  }

  async componentDidMount() {
    await this.fetchTopRatedList();
  }

  async fetchTopRatedList() {
    await this.setState({
      fetchingTopRatedList: true,
    });
    const list = await request(topRatedList);
    await this.setState({
      TopRatedList: list,
      fetchingTopRatedList: false,
    });
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 1)"
          animated
          barStyle="light-content"
        />

        <Content contentContainerStyle={theme.layout}>
          <View style={styles.homeFirstView}>
            <View style={styles.locView}>
              <TouchableOpacity onPress={openDrawer} style={styles.iconView}>
                <Image source={MENU_ICON} style={styles.notyIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{margin: 20}} />
          <View style={styles.homeSecondView}>
            <Text style={styles.browserText}>Products</Text>
          </View>

          <TopRated
            list={this.state.TopRatedList}
            fetching={this.state.fetchingTopRatedList}
            category={this.title}
            call={() => this.refs.modal.open()}
          />

          <View style={{margin: 15}} />
        </Content>
      </Container>
    );
  }
}
