// Loading screen component
// LoadingScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
//import styled, { createGlobalStyle } from 'styled-components';
import { useFonts, KleeOne_400Regular } from '@expo-google-fonts/klee-one';
import { Winter2023App } from '../components/Winter2023App'; // Import logic for Version 1

const LoadingScreen = ({ navigateToApp }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const handleClick = () => {
    // Call myFunction when a button is clicked
    Winter2023App();
  };


  return (
    <View style={styles.loadingContainer}>
      <Text>Select App Version:</Text>
      <TouchableOpacity onPress={() => navigateToApp('Spring2023App')}>
        <Image
          style={styles.menuButton}
          source={require('../assets/Impress-Winter-2023/Web/page01.jpg')}
        />
        <Text>Spring, 2023</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToApp('Summer2023App')}>
        <Image
          style={styles.menuButton}
          source={require('../assets/Impress-Winter-2023/Web/page01.jpg')}
        />
        <Text>Summer, 2023</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToApp('Fall2023App')}>
        <Image
          style={styles.menuButton}
          source={require('../assets/Impress-Winter-2023/Web/page01.jpg')}
        />
        <Text>Fall, 2023</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToApp('Winter2023App')}>
        <Image
          style={styles.menuButton}
          source={require('../assets/Impress-Winter-2023/Web/page01.jpg')}
        />
        <Text>Winter, 2023</Text>
      </TouchableOpacity>

            <TouchableOpacity onPress={handleClick}>
        <Image
          style={styles.menuButton}
          source={require('../assets/Impress-Winter-2023/Web/page01.jpg')}
        />
        <Text>Winter, 2023</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1, // Each section takes an equal amount of space
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    maxHeight: '100%',
    paddingTop: '.1%',
    paddingBottom: '1.5%',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(255, 255, 255, 0.5)',

    color: '#fffaf6',
  },
  menuButton: {
    height: '10vw',
    width: '10vw', // Adjust the width of the menu items relative to the container
    aspectRatio: 1, // Ensure aspect ratio remains square for images
    marginBottom: 0, // Adjust vertical spacing between menu items
    resizeMode: 'fill',

    backgroundImage: 'linear-gradient(160deg, #f0eff3 0%, #351201 127%)',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    color: '#fffaf6',
  },
});

export default LoadingScreen;
