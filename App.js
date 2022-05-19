/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import CommentBox from './CommentBox';

const App = () => {
  return (
    <View style={mainViewStyle.viewStyle}>
      <CommentBox />
    </View>
  );
};

const mainViewStyle = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#251D3A',
  },
});

export default App;
