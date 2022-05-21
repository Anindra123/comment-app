import React from 'react';
import {View} from 'react-native';
import CommentTextContainer from './CommentTextContainer';
import CommentViewStyle from './CommentViewStyle';
import ThemeContext from './Context';
import CommentBodyContainer from './CommentBodyContainer';

const CommentViewContainer = ({value}) => {
  const darkTheme = React.useContext(ThemeContext);
  const val = value;
  const prop = {
    titleStyle: CommentViewStyle(darkTheme).commentTitle,
    textStyle: CommentViewStyle(darkTheme).commentText,
  };
  return (
    <View style={CommentViewStyle(darkTheme).commentView}>
      <CommentTextContainer {...prop} itemTitle="Post " value={val.postId} />
      <CommentTextContainer {...prop} itemTitle="Name " value={val.name} />
      <CommentTextContainer {...prop} itemTitle="Email " value={val.email} />
      <CommentBodyContainer {...prop} itemTitle="Comment " value={val.body} />
    </View>
  );
};

export default CommentViewContainer;
