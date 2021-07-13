import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function ImgBackground(props) {
  const {scrollY, loading, photos} = props;

  return (
    <View style={StyleSheet.absoluteFillObject}>
      {
     
        photos.results.map((el, index) => {
          const inputRange = [
            (index - 1) * height,
            index * height,
            (index + 1) * height,
          ];
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={`image-${index.toString()}`}
              source={{uri: el.urls.regular}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                  backgroundColor: el.color,
                },
              ]}
              blurRadius={30}
            />
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    backgroundColor: '#388638',
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    photos: state.data,
    loading: state.loading,
    err: state.error,
  };
};

export default connect(mapStateToProps)(ImgBackground);
