import React from 'react';
import {View, Text} from 'react-native';

const CommentBodyContainer = ({itemTitle, value, titleStyle, textStyle}) => {
  return (
    <View>
      <Text style={titleStyle}>{itemTitle} :</Text>
      <Text style={textStyle}>{value}</Text>
    </View>
  );
};

export default CommentBodyContainer;
