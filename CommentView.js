import React from 'react';
import {Text, ScrollView} from 'react-native';
import ThemeContext from './Context';
import CommentViewContainer from './CommentViewContainer';
import CommentViewStyle from './CommentViewStyle';

const CommentView = ({comment}) => {
  const darkTheme = React.useContext(ThemeContext);
  if (comment === null) {
    return <Text>{''}</Text>;
  } else {
    return (
      <ScrollView style={CommentViewStyle(darkTheme).scrollViewStyle}>
        {comment.map(val => {
          return <CommentViewContainer key={val.id} value={val} />;
        })}
      </ScrollView>
    );
  }
};

export default CommentView;
