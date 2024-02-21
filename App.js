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
  LogBox,
  Modal,
} from 'react-native';

//import './App.css'; // Assuming the CSS file is named App.css
//import { Image } from 'expo-image';
//import Orientation from 'react-native-orientation-locker';
import FullscreenButton from './components/FullscreenButton';
//import LeftMenu from './components/LeftMenu'; // Update the path based on your file structure

//import styled, { createGlobalStyle } from 'styled-components';
import { useFonts, KleeOne_400Regular } from '@expo-google-fonts/klee-one';
import { AppLoading } from 'expo';

import { Winter2023App } from './components/Winter2023App'; // Import Winter, 2023 App
import HorizontalLine from './components/HorizontalLine';
import CustomModal from './components/CustomModal'; // Import the modal component

const TopMenu = () => {
  return <View style={styles.topMenu}>{/* Top menu content */}</View>;
};

// Loading Screen Container
const LoadingContainer = ({ onComplete }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const handleLoadingScreenClick = (version) => {
    onComplete(version); // Pass the selected version back via the onComplete prop
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.content}>
        <View style={styles.loadingContainer}>
          <Text style={styles.h1Text}>Impress Magazine</Text>
          <Text style={styles.h2Text}>2023-2024</Text>
          <HorizontalLine />

          <View style={styles.loadingContainerRow}>
            {/* Update each TouchableOpacity to pass the specific version */}
            <TouchableOpacity
              onPress={() => handleLoadingScreenClick('Spring2023')}>
              <Image
                style={styles.magazineDisplayButton}
                source={require('./assets/Impress-Winter-2023/Web/page01.jpg')}
              />
              <Text style={styles.h4Text}>Spring, 2023</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLoadingScreenClick('Summer2023')}>
              <Image
                style={styles.magazineDisplayButton}
                source={require('./assets/Impress-Winter-2023/Web/page01.jpg')}
              />
              <Text style={styles.h4Text}>Summer, 2023</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleLoadingScreenClick('Fall2023')}>
              <Image
                style={styles.magazineDisplayButton}
                source={require('./assets/Impress-Fall-2023/Web/page01.jpg')}
              />
              <Text style={styles.h4Text}>Fall, 2023</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleLoadingScreenClick('Winter2023')}>
              <Image
                style={styles.magazineDisplayButton}
                source={require('./assets/Impress-Winter-2023/Web/page01.jpg')}
              />
              <Text style={styles.h4Text}>Winter, 2024</Text>
            </TouchableOpacity>
          </View>
          <HorizontalLine />

          <Text style={styles.h3Text}>Which issue would you like to read?</Text>
          <br />
          <h2 style={styles.h2Text}>Thank you for reading Impress!</h2>
        </View>
      </View>
    </View>
  );
};

// Spring, 2023 Container
const Spring2023Container = ({ goToLoading }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const defaultSelectedItem = 'Spring2023CoverContainer'; // Set the default selected item here

  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const containers = [
    'Spring2023CoverContainer',
    'Spring2023Page12Container',
    'Spring2023Page34Container',
    'Spring2023Page56Container',
    'Spring2023BackCoverContainer',
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

  // Function to go back to LoadingContainer when needed
  const handleGoToLoading = () => {
    goToLoading(); // Call the function passed as a prop to go back to LoadingContainer
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.borderGap}>{/* No content for gap */}</View>

      <View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <TouchableOpacity
            style={styles.topMenuButton}
            onPress={handleGoToLoading}>
            <h1 style={styles.h3Text}>
              Impress
              <br />
              Magazine
            </h1>
          </TouchableOpacity>
        </View>

        {/* Left Menu */}
        <View style={styles.sidebarMenu}>
          <TouchableOpacity
            onPress={() => handleMenuClick('Spring2023CoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/0.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Spring2023Page12Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Spring2023Page34Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Spring2023Page56Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/5.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuClick('Spring2023BackCoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/back.png')}
            />
          </TouchableOpacity>

          {/*}
                        <TouchableOpacity onPress={() => handleMenuClick('AboutContainer')}>
          <Image style={styles.menuButton} source={require('./assets/nav-images/about.png')} />
        </TouchableOpacity>
        */}
        </View>

        {/* Footer - Next and Previous buttons */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity
            style={styles.menuButtonSmall}
            onPress={handlePrevious}>
            <Text>{'< Previous'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButtonSmall} onPress={handleNext}>
            <Text>{'Next >'}</Text>
          </TouchableOpacity>
        </View>

        {/* Footer - FullScreen button */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity style={styles.menuButtonSmall}>
            <FullscreenButton />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gap}>{/* No content for gap */}</View>

      {selectedItem === 'Spring2023CoverContainer' && (
        <Spring2023CoverContainer />
      )}
      {selectedItem === 'Spring2023Page12Container' && (
        <Spring2023Page12Container />
      )}
      {selectedItem === 'Spring2023Page34Container' && (
        <Spring2023Page34Container />
      )}
      {selectedItem === 'Spring2023Page56Container' && (
        <Spring2023Page56Container />
      )}
      {selectedItem === 'Spring2023BackCoverContainer' && (
        <Spring2023BackCoverContainer />
      )}
      {/* Add other container components based on your menu items */}

      {/*             {selectedItem === 'AboutContainer' && (
        <AboutContainer />
      )} */}

      <View style={styles.borderGap}>{/* No content for gap */}</View>
    </View>
  );
};

// Spring, 2023 App Containers
const Spring2023CoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page01.jpg')}
      />
    </View>
  );
};

const Spring2023Page12Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page034.jpg')}
      />
    </View>
  );
};

const Spring2023Page34Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page056.jpg')}
      />
    </View>
  );
};

const Spring2023Page56Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page078.jpg')}
      />
    </View>
  );
};

const Spring2023BackCoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page08.jpg')}
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

// End of Spring 2023

// Summer, 2023 Container
const Summer2023Container = ({ goToLoading }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const defaultSelectedItem = 'Summer2023CoverContainer'; // Set the default selected item here

  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const containers = [
    'Summer2023CoverContainer',
    'Summer2023Page12Container',
    'Summer2023Page34Container',
    'Summer2023Page56Container',
    'Summer2023BackCoverContainer',
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

  // Function to go back to LoadingContainer when needed
  const handleGoToLoading = () => {
    goToLoading(); // Call the function passed as a prop to go back to LoadingContainer
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.borderGap}>{/* No content for gap */}</View>

      <View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <TouchableOpacity
            style={styles.topMenuButton}
            onPress={handleGoToLoading}>
            <h1 style={styles.h3Text}>
              Impress
              <br />
              Magazine
            </h1>
          </TouchableOpacity>
        </View>

        {/* Left Menu */}
        <View style={styles.sidebarMenu}>
          <TouchableOpacity
            onPress={() => handleMenuClick('Summer2023CoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/0.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Summer2023Page12Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Summer2023Page34Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Summer2023Page56Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/5.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuClick('Summer2023BackCoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/back.png')}
            />
          </TouchableOpacity>

          {/*}
                        <TouchableOpacity onPress={() => handleMenuClick('AboutContainer')}>
          <Image style={styles.menuButton} source={require('./assets/nav-images/about.png')} />
        </TouchableOpacity>
        */}
        </View>

        {/* Footer - Next and Previous buttons */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity
            style={styles.menuButtonSmall}
            onPress={handlePrevious}>
            <Text>{'< Previous'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButtonSmall} onPress={handleNext}>
            <Text>{'Next >'}</Text>
          </TouchableOpacity>
        </View>

        {/* Footer - FullScreen button */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity style={styles.menuButtonSmall}>
            <FullscreenButton />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gap}>{/* No content for gap */}</View>

      {selectedItem === 'Summer2023CoverContainer' && (
        <Summer2023CoverContainer />
      )}
      {selectedItem === 'Summer2023Page12Container' && (
        <Summer2023Page12Container />
      )}
      {selectedItem === 'Summer2023Page34Container' && (
        <Summer2023Page34Container />
      )}
      {selectedItem === 'Summer2023Page56Container' && (
        <Summer2023Page56Container />
      )}
      {selectedItem === 'Summer2023BackCoverContainer' && (
        <Summer2023BackCoverContainer />
      )}
      {/* Add other container components based on your menu items */}

      {/*             {selectedItem === 'AboutContainer' && (
        <AboutContainer />
      )} */}

      <View style={styles.borderGap}>{/* No content for gap */}</View>
    </View>
  );
};

// Summer, 2023 App Containers
const Summer2023CoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page01.jpg')}
      />
    </View>
  );
};

const Summer2023Page12Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page034.jpg')}
      />
    </View>
  );
};

const Summer2023Page34Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page056.jpg')}
      />
    </View>
  );
};

const Summer2023Page56Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page078.jpg')}
      />
    </View>
  );
};

const Summer2023BackCoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page08.jpg')}
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

// End of Summer 2023

// Fall, 2023 Container
const Fall2023Container = ({ goToLoading }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const defaultSelectedItem = 'Fall2023CoverContainer'; // Set the default selected item here

  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const containers = [
    'Fall2023CoverContainer',
    'Fall2023Page12Container',
    'Fall2023Page34Container',
    'Fall2023Page56Container',
    'Fall2023BackCoverContainer',
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

  // Function to go back to LoadingContainer when needed
  const handleGoToLoading = () => {
    goToLoading(); // Call the function passed as a prop to go back to LoadingContainer
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.borderGap}>{/* No content for gap */}</View>

      <View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <TouchableOpacity
            style={styles.topMenuButton}
            onPress={handleGoToLoading}>
            <h1 style={styles.h3Text}>
              Impress
              <br />
              Magazine
            </h1>
          </TouchableOpacity>
        </View>

        {/* Left Menu */}
        <View style={styles.sidebarMenu}>
          <TouchableOpacity
            onPress={() => handleMenuClick('Fall2023CoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/0.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Fall2023Page12Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Fall2023Page34Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Fall2023Page56Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/5.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuClick('Fall2023BackCoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/back.png')}
            />
          </TouchableOpacity>

          {/*}
                        <TouchableOpacity onPress={() => handleMenuClick('AboutContainer')}>
          <Image style={styles.menuButton} source={require('./assets/nav-images/about.png')} />
        </TouchableOpacity>
        */}
        </View>

        {/* Footer - Next and Previous buttons */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity
            style={styles.menuButtonSmall}
            onPress={handlePrevious}>
            <Text>{'< Previous'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButtonSmall} onPress={handleNext}>
            <Text>{'Next >'}</Text>
          </TouchableOpacity>
        </View>

        {/* Footer - FullScreen button */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity style={styles.menuButtonSmall}>
            <FullscreenButton />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gap}>{/* No content for gap */}</View>

      {selectedItem === 'Fall2023CoverContainer' && <Fall2023CoverContainer />}
      {selectedItem === 'Fall2023Page12Container' && (
        <Fall2023Page12Container />
      )}
      {selectedItem === 'Fall2023Page34Container' && (
        <Fall2023Page34Container />
      )}
      {selectedItem === 'Fall2023Page56Container' && (
        <Fall2023Page56Container />
      )}
      {selectedItem === 'Fall2023BackCoverContainer' && (
        <Fall2023BackCoverContainer />
      )}
      {/* Add other container components based on your menu items */}

      {/*             {selectedItem === 'AboutContainer' && (
        <AboutContainer />
      )} */}

      <View style={styles.borderGap}>{/* No content for gap */}</View>
    </View>
  );
};

// Fall, 2023 App Containers
const Fall2023CoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page01.jpg')}
      />
    </View>
  );
};

const Fall2023Page12Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page034.jpg')}
      />
    </View>
  );
};

const Fall2023Page34Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page056.jpg')}
      />
    </View>
  );
};

const Fall2023Page56Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page078.jpg')}
      />
    </View>
  );
};

const Fall2023BackCoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Fall-2023/Web/page08.jpg')}
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

// End of Fall 2023

// Winter, 2023 Container
const Winter2023Container = ({ goToLoading }) => {
  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const defaultSelectedItem = 'Winter2023CoverContainer'; // Set the default selected item here

  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const containers = [
    'Winter2023CoverContainer',
    'Winter2023Page12Container',
    'Winter2023Page34Container',
    'Winter2023Page56Container',
    'Winter2023BackCoverContainer',
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

  // Function to go back to LoadingContainer when needed
  const handleGoToLoading = () => {
    goToLoading(); // Call the function passed as a prop to go back to LoadingContainer
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.borderGap}>{/* No content for gap */}</View>

      <View style={styles.sidebar}>
        {/* Header */}
        <View style={styles.sidebarHeader}>
          <TouchableOpacity
            style={styles.topMenuButton}
            onPress={handleGoToLoading}>
            <h1 style={styles.h3Text}>
              Impress
              <br />
              Magazine
            </h1>
          </TouchableOpacity>
        </View>

        {/* Left Menu */}
        <View style={styles.sidebarMenu}>
          <TouchableOpacity
            onPress={() => handleMenuClick('Winter2023CoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/0.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Winter2023Page12Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Winter2023Page34Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMenuClick('Winter2023Page56Container')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/5.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMenuClick('Winter2023BackCoverContainer')}>
            <Image
              style={styles.menuButton}
              source={require('./assets/nav-images/back.png')}
            />
          </TouchableOpacity>

          {/*}
                        <TouchableOpacity onPress={() => handleMenuClick('Winter2023AboutContainer')}>
          <Image style={styles.menuButton} source={require('./assets/nav-images/about.png')} />
        </TouchableOpacity>
        */}
        </View>

        {/* Footer - Next and Previous buttons */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity
            style={styles.menuButtonSmall}
            onPress={handlePrevious}>
            <Text>{'< Previous'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButtonSmall} onPress={handleNext}>
            <Text>{'Next >'}</Text>
          </TouchableOpacity>
        </View>

        {/* Footer - FullScreen button */}
        <View style={styles.sidebarFooter}>
          <TouchableOpacity style={styles.menuButtonSmall}>
            <FullscreenButton />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gap}>{/* No content for gap */}</View>

      {selectedItem === 'Winter2023CoverContainer' && (
        <Winter2023CoverContainer />
      )}
      {selectedItem === 'Winter2023Page12Container' && (
        <Winter2023Page12Container />
      )}
      {selectedItem === 'Winter2023Page34Container' && (
        <Winter2023Page34Container />
      )}
      {selectedItem === 'Winter2023Page56Container' && (
        <Winter2023Page56Container />
      )}
      {selectedItem === 'Winter2023BackCoverContainer' && (
        <Winter2023BackCoverContainer />
      )}
      {/* Add other container components based on your menu items */}

      {/*             {selectedItem === 'AboutContainer' && (
        <AboutContainer />
      )} */}

      <View style={styles.borderGap}>{/* No content for gap */}</View>
    </View>
  );
};

// Winter, 2023 App Containers
const Winter2023CoverContainer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const toggleModal = (modalType) => {
    setCurrentModal(modalType);
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.content}>
      <View style={styles.modalUnder}>
        <Image
          style={styles.contentImage}
          source={require('./assets/Impress-Winter-2023/Web/page01.jpg')} />
      </View>
      <View style={styles.modalOverlay}>
        {/* TouchableOpacity with Image */}
        {/* Button in the upper right corner */}
        <TouchableOpacity
          onPress={() => toggleModal('Winter2023Page0Overlay')}
          style={{
            position: 'absolute',
            top: '20vh', // Adjust the top position as a percentage of the overlay's height
            right: '30vw', // Adjust the right position as a percentage of the overlay's width
            alignItems: 'center',
            backgroundColor: 'none',
          }}>
          <Image
            source={require('./assets/nav-images/back.png')} // Replace with the path to your image
            style={{ width: '10vh', height: '10vh' }} // Adjust the width and height as needed
          />
          <Text style={styles.h3Text}>Play</Text>

        </TouchableOpacity>


        {/* Use the CustomModal component */}
        <CustomModal
          visible={modalVisible}
          closeModal={closeModal}
          modalType={currentModal}
        />
      </View>

      {/*
      <View style={styles.modalButtonContainer}>
        <TouchableOpacity onPress={() => toggleModal('Winter2023Page0Overlay')}>
          <Text style={styles.h1Text}>Show Overlay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleModal('Winter2023Page0Content')}>
          <Text style={styles.h3Text}>Show Content</Text>
        </TouchableOpacity>

        {/* Use the CustomModal component */}
      {/*}
        <CustomModal
          visible={modalVisible}
          closeModal={closeModal}
          modalType={currentModal}
        />
      </View> */}
    </View>
  );
};

const Winter2023Page12Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Winter-2023/Web/page034.jpg')}
      />
    </View>
  );
};

const Winter2023Page34Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Winter-2023/Web/page056.jpg')}
      />
    </View>
  );
};

const Winter2023Page56Container = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Winter-2023/Web/page078.jpg')}
      />
    </View>
  );
};

const Winter2023BackCoverContainer = () => {
  return (
    <View style={styles.content}>
      <Image
        style={styles.contentImage}
        source={require('./assets/Impress-Winter-2023/Web/page08.jpg')}
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

// End of Winter 2023

const App = () => {
  // Lock to landscape mode
  //Orientation.lockToLandscape();
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const { width } = Dimensions.get('window');
  const height = (width * 9) / 16; // Maintain a 16:9 aspect ratio

  const [fontLoaded] = useFonts({
    KleeOne: KleeOne_400Regular,
  });

  const defaultMagazineItem = 'LoadingContainer'; // Set the default magazine item here

  const [magazineItem, setMagazineItem] = useState(defaultMagazineItem);

  const handleLoadingScreenClick = (item) => {
    setMagazineItem(item);
  };

  const handleLoadingComplete = (version) => {
    if (version === 'Spring2023') {
      setMagazineItem('Spring2023Container'); // Update magazineItem for Spring 2023 version
    } else if (version === 'Summer2023') {
      setMagazineItem('Summer2023Container'); // Update magazineItem for Summer 2023 version
    } else if (version === 'Fall2023') {
      setMagazineItem('Fall2023Container'); // Update magazineItem for Fall 2023 version
    } else if (version === 'Winter2023') {
      setMagazineItem('Winter2023Container'); // Update magazineItem for Winter 2023 version
    }
    // Add more conditions for other versions if needed
  };

  // Function to go back to LoadingContainer
  const goToLoadingScreen = () => {
    setMagazineItem('LoadingContainer');
  };

  return (
    <View style={styles.fullScreenContainer}>
      <View style={styles.centeredContainer}>
        {/* Pass a function that wraps handleLoadingComplete with the desired version */}
        {magazineItem === 'LoadingContainer' && (
          <LoadingContainer
            onComplete={(version) => handleLoadingComplete(version)}
          />
        )}
        {magazineItem === 'Spring2023Container' && (
          <Spring2023Container goToLoading={goToLoadingScreen} />
        )}
        {magazineItem === 'Summer2023Container' && (
          <Summer2023Container goToLoading={goToLoadingScreen} />
        )}
        {magazineItem === 'Fall2023Container' && (
          <Fall2023Container goToLoading={goToLoadingScreen} />
        )}
        {magazineItem === 'Winter2023Container' && (
          <Winter2023Container goToLoading={goToLoadingScreen} />
        )}

        {/* Render other versions based on magazineItem state */}
      </View>
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
    flexDirection: 'row',
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
    gridGap: '1vw',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gridGap: '1vw',
    padding: '0vw',
    margin: '.5vw',

    width: '80%', // Adjust the width of the menu items relative to the container
    resizeMode: 'contain',
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
  topMenuButton: {
    height: '8.2vw',
    width: '8.2vw',
    backgroundImage: 'linear-gradient(160deg, #f0eff3 0%, #351201 127%)',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
    fontSize: '.85vw',
    objectFit: 'contain',

    justifyContent: 'center',
    alignItems: 'center',
  },

  contentImage: {
    //flex: 1, // Takes the available space in the row
    //height: '100%',
    //resizeMode: 'contain', // Adjust image mode as needed
    maxWidth: '99%', // Adjust as needed for the maximum width within the container
    maxHeight: '99%', // Adjust as needed for the maximum height within the container
    resizeMode: 'contain', // Maintain aspect ratio while fitting within the bounds
  },
  loadingContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    maxHeight: '90%',
    width: '90%',
    paddingTop: '.5%',
    paddingBottom: '2%',
    flex: 1, // Each section takes an equal amount of space
    height: '90%',
    //background: 'linear-gradient(203deg, #1a0033 0%, #e6ccff 90%)',
    background:
      'linear-gradient(203deg, #003566 0%, #1a0033 0%, #1f004d 60%, #003566 90%)',
    padding: '0.1vw',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
    resizeMode: 'contain',
    color: 'white',
  },

  loadingContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    maxHeight: '90%',
    width: '70%',

    flex: 1, // Each section takes an equal amount of space
    height: '90%',

    overflow: 'hidden',
    resizeMode: 'contain',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
    fontSize: '3vw',
  },

  magazineDisplayButton: {
    maxHeight: '31vh',
    maxWidth: '22vh',
    backgroundImage: 'linear-gradient(160deg, #f0eff3 0%, #351201 127%)',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
    fontSize: '3vh',
    objectFit: 'contain',

    justifyContent: 'center',
    alignItems: 'center',
  },

  //CHANGE TEXT SIZE TO SCALE!
  topMenuText: {
    fontSize: '1.5vh',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fffaf6',
    objectFit: 'contain',
    adjustsFontSizeToFit: 'true',
    numberOfLines: '1',
  },
  baseText: {
    fontSize: '.9vh',
  },
  h1Text: {
    fontSize: '10vh',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
  },
  h2Text: {
    fontSize: '4vh',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
  },
  h3Text: {
    fontSize: '3.2vh',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
  },
  h4Text: {
    fontSize: '2.2vh',
    textAlign: 'center',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
  },

  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Change the color and opacity as needed

    zIndex: 2, // Ensure the overlay is above the image
  },
  modalUnder: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 1,
  },
});

export default App;
