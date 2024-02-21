import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LeftMenu = () => {
  const menuItems = [
    { title: 'Home', image: require('../assets/nav-images/front.png'), link: 'index.html' },
    { title: '1', image: require('../assets/nav-images/1.png'), link: '1.html' },
    { title: '2', image: require('../assets/nav-images/2.png'), link: '1.html' },
    { title: '3', image: require('../assets/nav-images/3.png'), link: '3.html' },
    { title: '4', image: require('../assets/nav-images/4.png'), link: '3.html' },
    { title: '5', image: require('../assets/nav-images/5.png'), link: '5.html' },
    { title: '6', image: require('../assets/nav-images/6.png'), link: '5.html' },
    { title: 'Back', image: require('../assets/nav-images/back.png'), link: 'cover.html' },
    { title: 'About', image: require('../assets/nav-images/about.png'), link: 'about.html' },
  ];

  const handleMenuItemPress = (link) => {
    // Handle navigation or action based on the link
    console.log(`Navigating to: ${link}`);
  };

  return (
    <View style={styles.leftMenu}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.leftMenuButton}
          onPress={() => handleMenuItemPress(item.link)}
        >
          <Image source={item.image} style={styles.leftMenuImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  leftMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftMenuButton: {
    marginBottom: 10,
  },
  leftMenuImage: {
    width: 50,
    height: 50,
  },
});

export default LeftMenu;