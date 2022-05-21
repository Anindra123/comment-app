import React from 'react';
import {Text} from 'react-native';

const CommentTextContainer = ({itemTitle, value, titleStyle, textStyle}) => {
  return (
    <Text style={titleStyle}>
      {itemTitle} : <Text style={textStyle}>{value}</Text>
    </Text>
  );
};

export default CommentTextContainer;
