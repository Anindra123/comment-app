import React from 'react';
import {View} from 'react-native';
import CommentView from './CommentView';
import ThemeContext from './Context';
import CommentBoxStyle from './CommentBoxStyle';
import CommentBodyContainer from './CommentBoxContainer';
async function GetJsonData(postID) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postID}/comments`,
    );
    const jsonRes = await data.json();
    return jsonRes;
  } catch {
    throw new Error();
  }
}

const CommentBox = () => {
  let [postID, setPostId] = React.useState('');
  let [comment, setComment] = React.useState(null);
  let [isError, setError] = React.useState(false);
  let darkTheme = React.useContext(ThemeContext);

  React.useEffect(() => {
    GetJsonData(postID)
      .then(response => {
        Object.keys(response).length === 0
          ? setComment(null)
          : setComment(response);
        setError(false);
      })
      .catch(e => {
        setError(true);
        setComment(null);
      });
    return () => {
      setComment(null);
      setError(false);
    };
  }, [postID, isError]);

  const handleTextChange = text => {
    const num = parseInt(text, 10);
    if (Number.isNaN(num)) {
      setPostId('');
    } else {
      setPostId(num.toString());
    }
  };
  return (
    <View style={CommentBoxStyle(darkTheme).viewStyle}>
      <CommentBodyContainer
        changeText={handleTextChange}
        checkError={isError}
      />
      <View style={CommentBoxStyle(darkTheme).commentViewContainer}>
        <CommentView comment={comment} />
      </View>
    </View>
  );
};

export default CommentBox;
