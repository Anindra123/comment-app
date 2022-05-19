import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ThemeContext from './Context';
import AppColorScheme from './Color';
const CommentView = ({comment}) => {
  const darkTheme = React.useContext(ThemeContext);
  if (comment === null) {
    return <Text>{''}</Text>;
  } else {
    return (
      <ScrollView style={commentViewStyle(darkTheme).scrollViewStyle}>
        {comment.map(val => {
          return (
            <View style={commentViewStyle(darkTheme).commentView} key={val.id}>
              <Text style={commentViewStyle(darkTheme).commentTitle}>
                Post ID :{' '}
                <Text style={commentViewStyle(darkTheme).commentText}>
                  {val.postId}
                </Text>
              </Text>
              <Text style={commentViewStyle(darkTheme).commentTitle}>
                Email :{' '}
                <Text style={commentViewStyle(darkTheme).commentText}>
                  {val.email}
                </Text>
              </Text>
              <Text style={commentViewStyle(darkTheme).commentTitle}>
                Name :{' '}
                <Text style={commentViewStyle(darkTheme).commentText}>
                  {val.name}
                </Text>
              </Text>
              <Text style={commentViewStyle(darkTheme).commentTitle}>
                Comment :
              </Text>
              <Text style={commentViewStyle(darkTheme).commentBody}>
                {val.body}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

const commentViewStyle = isDark =>
  StyleSheet.create({
    commentView: {
      backgroundColor: isDark
        ? AppColorScheme.commentViewBgDark
        : AppColorScheme.commentViewBgWhite,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 10,
      borderColor: isDark
        ? AppColorScheme.commentViewDark
        : AppColorScheme.commentViewWhite,
      borderWidth: 2,
      padding: 5,
    },
    commentText: {
      marginBottom: 5,
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
      color: isDark
        ? AppColorScheme.textColorWhite
        : AppColorScheme.textColorDark,
    },
    commentTitle: {
      fontSize: 15,
      fontFamily: 'Poppins-Bold',
      color: isDark
        ? AppColorScheme.commentViewDark
        : AppColorScheme.commentViewWhite,
    },
    commentBody: {
      fontSize: 12,
      fontFamily: 'Poppins-Light',
      color: isDark
        ? AppColorScheme.textColorWhite
        : AppColorScheme.textColorDark,
    },
    scrollViewStyle: {
      padding: 5,
    },
  });

export default CommentView;
