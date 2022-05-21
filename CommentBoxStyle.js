import {StyleSheet} from 'react-native';
import AppColorScheme from './Color';
const CommentBoxStyle = isDark =>
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

export default CommentBoxStyle;
