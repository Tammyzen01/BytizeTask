import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';
import {styles} from '../styles';
import {NAME, EDIT, DELETE} from '@constant';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.item ? props.item : {};
  }

  render() {
    const item = this.item.show;
    return (
      <>
        <View style={styles.foryouMain}>
          <TouchableOpacity activeOpacity={0.8} style={styles.newBoxView}>
            <View style={styles.firstRow2}>
              <View style={styles.textView}>
                <Text style={styles.newIdText2}>{NAME}</Text>
                <Text style={styles.newIdText}>{item.name}</Text>
              </View>

              <View style={styles.btnMainView}>
                <TouchableOpacity
                  style={styles.btnView}
                  onPress={() => this.props.edit(item)}>
                  <Text style={styles.btnText}>{EDIT}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnView}
                  onPress={() => this.props.remove(item.id)}>
                  <Text style={styles.btnText}>{DELETE}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
