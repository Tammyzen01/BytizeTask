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
import theme from '@theme/styles';

import {back} from '@utility/navigation';

export default class extends React.Component {
  constructor(props) {
    super(props);
    let route = props.route ? props.route : {};
    let params = route.params ? route.params : {};
    this.item = params.item ? params.item : {};
    this.state = {
      selected: '',
      visibleDailyReminder: false,
      isDisabled: false,
      isOpen: false,
      TopRatedList: [],
      fetchingTopRatedList: true,
    };
  }

  render() {
    const {name, category, image} = this.item;
    return (
      <Container>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 1)"
          animated
          barStyle="light-content"
        />

        <Content contentContainerStyle={theme.layout}>
          <Image source={{uri: image}} style={styles.topRatedImg} />
          <View style={styles.homeFirstView}>
            <View style={styles.locView}>
              <TouchableOpacity style={{marginLeft: -15}} onPress={back}>
                <Icon
                  name="chevron-left"
                  type="Entypo"
                  style={styles.iconStyle3}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.homeSecondView}>
            <Text style={styles.browserText}>{name}</Text>
          </View>

          <View activeOpacity={0.8} style={styles.topRatedMainView}>
            <View style={styles.topRatedView}>
              <View style={styles.topRatedContentView}>
                <View style={{marginLeft: 5}}>
                  <Text style={[styles.topRatedGreyText, {letterSpacing: 0.8}]}>
                    {category}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
