import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CommentView from './CommentView';
import ThemeContext from './Context';
import AppColorScheme from './Color';

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
    <View style={commentBoxStyle(darkTheme).viewStyle}>
      <Text style={commentBoxStyle(darkTheme).errorTextStyle}>
        {isError ? 'Error getting data' : ''}
      </Text>
      <Text style={commentBoxStyle(darkTheme).titleTextSytle}>
        Enter a post ID :
      </Text>
      <View style={commentBoxStyle(darkTheme).textBoxContainer}>
        <TextInput
          style={commentBoxStyle(darkTheme).textBoxStyle}
          onChangeText={text => handleTextChange(text)}
          placeholderTextColor={
            darkTheme
              ? AppColorScheme.textColorWhite
              : AppColorScheme.textColorDark
          }
          placeholder="Enter post id"
          keyboardType="numeric"
        />
      </View>
      <View style={commentBoxStyle(darkTheme).commentViewContainer}>
        <CommentView comment={comment} />
      </View>
    </View>
  );
};

const commentBoxStyle = isDark =>
  StyleSheet.create({
    viewStyle: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 50,
    },
    titleTextSytle: {
      fontSize: 30,
      marginTop: 5,
      marginBottom: 5,
      fontFamily: 'Poppins-Regular',
      color: isDark
        ? AppColorScheme.textColorWhite
        : AppColorScheme.textColorDark,
    },
    textBoxContainer: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'flex-start',
      flexBasis: 1,
      flexShrink: 50,
      flexGrow: 50,
    },
    errorTextStyle: {
      fontSize: 20,
      color: '#F32424',
      fontFamily: 'Poppins-Regular',
    },
    commentViewContainer: {
      flex: 1,
      flexBasis: 1,
      flexShrink: 300,
      flexGrow: 300,
    },
    textBoxStyle: {
      backgroundColor: isDark
        ? AppColorScheme.textBoxBackgroundDark
        : AppColorScheme.textBoxBackgroundWhite,
      flexDirection: 'row',
      flexGrow: 4,
      marginTop: 5,
      marginBottom: 5,
      fontFamily: 'Poppins-Light',
      borderRadius: 5,
      color: isDark
        ? AppColorScheme.textColorWhite
        : AppColorScheme.textColorDark,
    },
  });

export default CommentBox;
