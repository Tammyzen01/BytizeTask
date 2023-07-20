import React from 'react';
import {FlatList, Text} from 'react-native';

import styles from '../styles';

import Item from './Item';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    return (
      <Item
        language={this.props.language}
        item={item}
        category={this.props.category}
        call={() => this.props.call()}
      />
    );
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.itemContent}
        data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
        renderItem={this.renderItem}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}
