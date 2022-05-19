/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Switch, Text} from 'react-native';
import AppColorScheme from './Color';
import CommentBox from './CommentBox';
import ThemeContext from './Context';

const App = () => {
  let [isDark, setDarkMode] = React.useState(true);

  const handleThemeChange = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <View style={mainViewStyle(isDark).viewStyle}>
      <View style={mainViewStyle(isDark).switchContainer}>
        <Text style={mainViewStyle(isDark).swithText}>
          Switch theme to {isDark ? 'Light ' : 'Dark'}{' '}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: 'aqua'}}
          thumbColor={isDark ? 'aqua' : 'grey'}
          onValueChange={handleThemeChange}
          value={isDark}
        />
      </View>
      <ThemeContext.Provider value={isDark}>
        <CommentBox />
      </ThemeContext.Provider>
    </View>
  );
};

const mainViewStyle = isDark =>
  StyleSheet.create({
    viewStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark
        ? AppColorScheme.backGroundColorDark
        : AppColorScheme.backGroundColorWhite,
    },
    switchContainer: {
      flex: 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    swithText: {
      fontSize: 20,
      marginTop: 5,
      marginBottom: 5,
      fontFamily: 'Poppins-Regular',
      color: isDark
        ? AppColorScheme.textColorWhite
        : AppColorScheme.textColorDark,
    },
  });

export default App;
