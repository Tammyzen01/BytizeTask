import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Icon, Text, View} from 'native-base';
import styles from './../styles';
import {navigate} from '@utility/navigation';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '2.5',
    };
  }

  onStarRatingPress(rating) {
    this.setState({rating: rating});
  }

  render() {
    const item = this.props.item;
    const category = this.props.category;
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.topRatedMainView}
          onPress={() => navigate('ListView', {item: item})}>
          <View style={styles.topRatedView}>
            <Image source={{uri: item.image}} style={styles.topRatedImg} />
            <View style={styles.topRatedContentView}>
              <View style={{marginLeft: 10}}>
                <Text style={styles.topRatedDocName}>{item.name}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}
