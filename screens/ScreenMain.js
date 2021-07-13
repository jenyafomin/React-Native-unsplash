import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Animated, Text} from 'react-native';
import {connect} from 'react-redux';
import ImgBackground from '../components/ImgBackground';
import ImgItem from '../components/ImgItem';
import LoadingScreen from '../components/ScreenLoad';
import {FetchPhotos} from '../Store/Photos/PhotoReducer';


function App(props) {

  const {navigation, photos, loading} = props;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    props.fetchPhotos('sea', 1, 10);
  }, []);

  return (
    <View style={styles.container}>
      
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <ImgBackground scrollY={scrollY} />
          <Animated.FlatList
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: false},
            )}
            data={photos.results}
            pagingEnabled
            renderItem={({item}) => {
              return <ImgItem item={item} navigation={navigation} />;
            }}
          />
        </>
      )}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: (optional, page, perPage) => {
      dispatch(FetchPhotos(optional, page, perPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
