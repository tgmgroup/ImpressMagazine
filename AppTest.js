import * as React from 'react';
import { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
//import "./App.css";
import Orientation from 'react-native-orientation-locker';




const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
<View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.header}>

            <Text>Impress HEADER</Text>
            <Text>大きく・小さく</Text>

        </View>

        {/* Menu */}
        {/* Replace the images with appropriate React Native components */}
        {/* For example, use <Image source={require('path_to_image')} /> */}
        <View style={styles.leftMenu}>
          {/* Menu buttons */}
            <Text>MENU BUTTONS</Text>
        </View>

        {/* Footer - Previous */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.menuButtonSmall}>
            <Text>{'< Previous'}</Text>
                        <Text>FOOTER BUTTONS</Text>
          </TouchableOpacity>
        </View>
        {/* Footer - Next */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.menuButtonSmall}>
            <Text>{'Next >'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const TopMenu = () => {
  return (
    <View style={styles.topMenu}>
      {/* Top menu content */}
    </View>
  );
};

//const Dimensions = { width: 0, height: 0 };


const App = () => {

  useEffect(() => {
    Orientation.lockToLandscape(); // Lock to landscape mode

    return () => {
      Orientation.unlockAllOrientations(); // Unlock orientation when component unmounts
    };
  }, []);

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;


  const PlayAndShow = (audioId, textId, playId) => {
    // Functionality for playing audio and showing text
  };

  return (
    

    
    <View style={styles.container}>
      {/* Your website content goes here */}
      

      {isLandscape ? <Sidebar  /> : <TopMenu />}
      {/* Main content */}


      <View style={styles.gap} />

      {/* Content */}
      <View style={styles.content}>
        {/* Background Image */}
        {/* Replace the background image with appropriate React Native styling */}
        <Image
          source={require('./Impress-Winter-2023/nav-images/0.png')}
          style={styles.backgroundImage}
        />

        {/* Text with Play button */}
        <TouchableOpacity onPress={() => PlayAndShow('audio1-0', 'text1-0', 'play1-0')} style={styles.playButton}>
          {/* Replace the play button image */}
          <Image source={require('./Impress-Winter-2023/nav-images/0.png')} style={styles.audioButtonImage} />
        </TouchableOpacity>

        {/* Hidden text */}
        {/* Replace modal or hidden text functionality using React Native components */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
        flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: 'Klee One',
  },

  /*
  content: {
    width: '100vw',
    height: '56.25vw', // 1080p aspect ratio: 1080 / 1920 * 100 = 56.25
    maxHeight: '100vh',
    maxWidth: '100%',
    paddingVertical: '0.2vw',
    overflow: 'hidden',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(203deg, #b57b4b 0%, #210a01 90%)',
    padding: '0.1vw',
    boxShadow: '0 .1vw .2vw rgba(0, 0, 0, 0.836), 0 .06vw .06vw rgba(0, 0, 0, 0.23)',
  },*/


  sidebar: {
    flex: 1, // Take one-third of the screen width in landscape
        height: '100%',
        width: 100,
    backgroundColor: 'lightblue',
        flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(203deg, #b57b4b 0%, #210a01 90%)',
    padding: '0.1vw',
    boxShadow: '0 .1vw .2vw rgba(0, 0, 0, 0.836), 0 .06vw .06vw rgba(0, 0, 0, 0.23)',
  },
  topMenu: {
    height: 100, // Fixed height for the top menu in portrait
    width: '100%',
    backgroundColor: 'lightgreen',
  },
  content: {
    flex: 10, // Take two-thirds of the screen width in landscape
    width: '100vw',
    height: '56.25vw', // 1080p aspect ratio: 1080 / 1920 * 100 = 56.25
    maxHeight: '100vh',
    maxWidth: '100%',
    paddingVertical: '0.2vw',
    overflow: 'hidden',
    //backgroundColor: '#000000',

    backgroundColor: 'lightgrey',
  },

  // Other styles...
});

export default App;

