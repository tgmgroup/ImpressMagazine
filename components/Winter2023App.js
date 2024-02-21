import * as React from 'react';
import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
//import './App.css'; // Assuming the CSS file is named App.css
//import { Image } from 'expo-image';
import Orientation from 'react-native-orientation-locker';
import FullscreenButton from '../components/FullscreenButton';
//import LeftMenu from './components/leftMenu'; // Update the path based on your file structure

//import styled, { createGlobalStyle } from 'styled-components';
import { useFonts, KleeOne_400Regular } from '@expo-google-fonts/klee-one';
import { AppLoading } from 'expo';




// Winter, 2023 App Containers
const CoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('../assets/Impress-Winter-2023/Web/page01.jpg')}
      />
    </View>
  );
};

// Example of AboutContainer component
const Page12Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('../assets/Impress-Winter-2023/Web/page034.jpg')}
      />
    </View>
  );
};

const Page34Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('../assets/Impress-Winter-2023/Web/page056.jpg')}
      />
    </View>
  );
};

const Page56Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('../assets/Impress-Winter-2023/Web/page078.jpg')}
      />
    </View>
  );
};

const BackCoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('../assets/Impress-Winter-2023/Web/page08.jpg')}
      />
    </View>
  );
};

{
  /*}
const AboutContainer = () => {
  return (
              <View style={styles.content}>
      <Image style={styles.contentImage} source={require('./assets/Impress-Winter-2023/Web/page08.jpg')} />
    </View>
  );
};
*/
}





// Winter, 2023 Container
const Winter2023App = () => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const defaultSelectedItem = 'CoverContainer'; // Set the default selected item here

  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const containers = [
    'CoverContainer',
    'Page12Container',
    'Page34Container',
    'Page56Container',
    'BackCoverContainer',
  ]; // List of container names

  const selectedIndex = containers.indexOf(selectedItem); // Get the index of the selected container

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % containers.length; // Get the index of the next container
    setSelectedItem(containers[nextIndex]); // Set the next container as selected
  };

  const handlePrevious = () => {
    const previousIndex =
      selectedIndex === 0 ? containers.length - 1 : selectedIndex - 1; // Get the index of the previous container
    setSelectedItem(containers[previousIndex]); // Set the previous container as selected
  };
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.borderGap}>{/* No content for gap */}</View>

      <View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <FullscreenButton />
        </View>
        {/* Left Menu */}
        <View style={styles.sidebarMenu}>
          <TouchableOpacity onPress={() => handleMenuClick('CoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/0.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuClick('Page12Container')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/1.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuClick('Page12Container')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/2.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuClick('Page34Container')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/3.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuClick('Page34Container')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/4.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuClick('Page56Container')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/5.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleMenuClick('Page56Container')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/6.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuClick('BackCoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('../assets/nav-images/back.png')}
            />
          </TouchableOpacity>

          {/*}
                        <TouchableOpacity onPress={() => handleMenuClick('AboutContainer')}>
          <Image style={styles.menuButton} source={require('./assets/nav-images/about.png')} />
        </TouchableOpacity>
        */}
        </View>

        {/* Next and Previous buttons */}
        {/* Footer - Previous */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity
            style={styles.menuButtonSmall}
            onPress={handlePrevious}>
            <Text>{'< Previous'}</Text>
          </TouchableOpacity>
        </View>
        {/* Footer - Next */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity style={styles.menuButtonSmall} onPress={handleNext}>
            <Text>{'Next >'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gap}>{/* No content for gap */}</View>

      {selectedItem === 'CoverContainer' && <CoverContainer />}
      {selectedItem === 'Page12Container' && <Page12Container />}
      {selectedItem === 'Page34Container' && <Page34Container />}
      {selectedItem === 'Page56Container' && <Page56Container />}
      {selectedItem === 'BackCoverContainer' && <BackCoverContainer />}
      {/* Add other container components based on your menu items */}

      {/*             {selectedItem === 'AboutContainer' && (
        <AboutContainer />
      )} */}

      <View style={styles.borderGap}>{/* No content for gap */}</View>
    </View>
  );
};



const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: '0.2vw',

    fontFamily: 'KleeOne', // Apply the Klee One font to this text
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    backgroundColor: 'black',
    flexDirection: 'row', // Arrange sections horizontally
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',
  },

  sidebar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    maxHeight: '100%',
    paddingTop: '.5%',
    paddingBottom: '2%',
    flex: 9, // Each section takes an equal amount of space
    height: '100%',
    background: 'linear-gradient(203deg, #b57b4b 0%, #210a01 90%)',
    padding: '0.1vw',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
    resizeMode: 'contain',
  },

  gap: {
    flex: 3, // Each section takes an equal amount of space
    height: '100%',
  },
  borderGap: {
    flex: 1, // Each section takes an equal amount of space
    height: '100%',
  },

  content: {
    flex: 86, // Each section takes an equal amount of space
    height: '100%',
    width: '100%',
    maxHeight: '100%',
    paddingTop: '.1%',
    paddingBottom: '1.5%',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'black',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(255, 255, 255, 0.5)',
  },

  sidebarHeader: {
    backgroundColor: '#f1faff',
    backgroundImage: 'linear-gradient(160deg, #eeedf1 0%, #3c1000 127%)',
    boxShadow: '0vw .01vw .05vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    textAlign: 'center',
    borderRadius: '.15vw',
  },
  sidebarMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gridGap: '.5vw',
    padding: '0vw',
    margin: '.5vw',

    width: '80%', // Adjust the width of the menu items relative to the container
    resizeMode: 'contain',
  },
  sidebarMenuItem: {
    width: '80%', // Adjust the width of the menu items relative to the container
    aspectRatio: 1, // Ensure aspect ratio remains square for images
    marginBottom: 0, // Adjust vertical spacing between menu items
    resizeMode: 'contain',
  },

  sidebarFooter: {
    backgroundColor: '#f1faff',
    backgroundImage: 'linear-gradient(160deg, #eeedf1 0%, #3c1000 127%)',
    boxShadow: '0vw .01vw .05vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    textAlign: 'center',
    borderRadius: '.15vw',
    margin: '.1vw',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuButton: {
    height: '4.2vw',
    width: '4.2vw', // Adjust the width of the menu items relative to the container
    aspectRatio: 1, // Ensure aspect ratio remains square for images
    marginBottom: 0, // Adjust vertical spacing between menu items
    resizeMode: 'contain',

    backgroundImage: 'linear-gradient(160deg, #f0eff3 0%, #351201 127%)',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    color: '#fffaf6',
  },

  menuButtonHover: {
    backgroundColor: 'rgba(73, 36, 3, 0.884)',
    transition: 'background-color 0.2s',
    height: '7vw',
    width: '7vw',
  },
  menuButtonSmall: {
    height: '3.1vw',
    width: '6.2vw',
    backgroundImage: 'linear-gradient(160deg, #f0eff3 0%, #351a01 127%)',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    color: '#f8f6ff',
    fontFamily: "'Klee One', cursive",
    objectFit: 'contain',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonSmallHover: {
    backgroundColor: 'rgba(124, 53, 6, 0.884)',
    transition: 'background-color 0.2s',
    height: '4vw',
    width: '7vw',
  },

  contentImage: {
    //flex: 1, // Takes the available space in the row
    //height: '100%',
    //resizeMode: 'contain', // Adjust image mode as needed
    maxWidth: '99%', // Adjust as needed for the maximum width within the container
    maxHeight: '99%', // Adjust as needed for the maximum height within the container
    resizeMode: 'contain', // Maintain aspect ratio while fitting within the bounds
    
  },
});

export default Winter2023App;
