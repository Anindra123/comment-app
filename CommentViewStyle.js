import {StyleSheet} from 'react-native';
import AppColorScheme from './Color';

const CommentViewStyle = isDark =>
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

export default CommentViewStyle;
