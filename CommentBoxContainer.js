import React from 'react';
import {View, Text, TextInput} from 'react-native';
import ThemeContext from './Context';
import AppColorScheme from './Color';
import CommentBoxStyle from './CommentBoxStyle';

const CommentBoxContainer = ({changeText, checkError}) => {
  const darkTheme = React.useContext(ThemeContext);
  return (
    <>
      <Text style={CommentBoxStyle(darkTheme).errorTextStyle}>
        {checkError ? 'Error getting data' : ''}
      </Text>
      <Text style={CommentBoxStyle(darkTheme).titleTextSytle}>
        Enter a post ID :
      </Text>
      <View style={CommentBoxStyle(darkTheme).textBoxContainer}>
        <TextInput
          style={CommentBoxStyle(darkTheme).textBoxStyle}
          onChangeText={text => changeText(text)}
          placeholderTextColor={
            darkTheme
              ? AppColorScheme.textColorWhite
              : AppColorScheme.textColorDark
          }
          placeholder="Enter post id"
          keyboardType="numeric"
        />
      </View>
    </>
  );
};

export default CommentBoxContainer;
