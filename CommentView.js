import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const CommentView = ({comment}) => {
  if (comment === null) {
    return <Text>{''}</Text>;
  } else {
    return (
      <ScrollView style={commentViewStyle.scrollViewStyle}>
        {comment.map(val => {
          return (
            <View style={commentViewStyle.commentView} key={val.id}>
              <Text style={commentViewStyle.commentTitle}>
                Post ID :{' '}
                <Text style={commentViewStyle.commentText}>{val.postId}</Text>
              </Text>
              <Text style={commentViewStyle.commentTitle}>
                Email :{' '}
                <Text style={commentViewStyle.commentText}>{val.email}</Text>
              </Text>
              <Text style={commentViewStyle.commentTitle}>
                Name :{' '}
                <Text style={commentViewStyle.commentText}>{val.name}</Text>
              </Text>
              <Text style={commentViewStyle.commentTitle}>Comment :</Text>
              <Text style={commentViewStyle.commentBody}>{val.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

const commentViewStyle = StyleSheet.create({
  commentView: {
    backgroundColor: '#2A2550',
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 10,
    borderColor: '#E04D01',
    borderWidth: 2,
    padding: 5,
  },
  commentText: {
    marginBottom: 5,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#DDDDDD',
  },
  commentTitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#E04D01',
  },
  commentBody: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#DDDDDD',
  },
  scrollViewStyle: {
    padding: 5,
  },
});

export default CommentView;
