import React from 'react';
import {FlatList} from 'react-native';
import {View} from 'native-base';
import Item from './Item';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.reached = true;
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    return (
      <Item
        item={item}
        remove={id => this.props.remove(id)}
        edit={id => this.props.edit(id)}
      />
    );
  }

  render() {
    return (
      <>
        <View>
          <FlatList
            data={this.props.data}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderItem}
            onEndReached={this.props.loadData}
            onEndReachedThreshold={0.5}
            onMomentumScrollBegin={() => (this.reached = false)}
            ListFooterComponent={this.props.footer}
          />
        </View>
      </>
    );
  }
}
