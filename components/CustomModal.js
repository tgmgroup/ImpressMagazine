import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const CustomModal = ({ visible, closeModal, modalType }) => {
  // Function to render different modal content based on modalType prop
  const renderModalContent = () => {
    switch (modalType) {
      case 'Winter2023Page0Overlay':
        return (
          <View style={styles.modalOverlay}>
            <Text style={styles.h1Text}>This is Modal A</Text>
                        <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('../assets/nav-images/back.png')} // Replace with the path to your image
                style={styles.audioButton} // Adjust the width and height as needed
              > </Image>
              <Text style={styles.h4Text}>Play Audio</Text>
            </TouchableOpacity>

              <Text style={styles.contentText}>This is some text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttextext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text textt text texttext text texttext text texttext text text</Text>

            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('../assets/nav-images/back.png')} // Replace with the path to your image
                style={styles.closeButton} // Adjust the width and height as needed
              />
              <Text style={styles.h4Text}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Winter2023Page0Content':
        return (
          <View style={styles.modalContent}>
            <Text>This is Modal B</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        {renderModalContent()} {/* Render different modal content */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  modalOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: '100%',
    width: '100%',
    padding: '1%',
    borderRadius: '1vh',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: '5vh',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: '100%',
    width: '100%',
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  h1Text: {
    fontSize: '10vh',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    //color: '#fffaf6',
    color: '#000000',
    fontFamily: "'Klee One', cursive",
  },
  h2Text: {
    fontSize: '4vh',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    //color: '#fffaf6',
    color: '#000000',
    fontFamily: "'Klee One', cursive",
  },
  h3Text: {
    fontSize: '3.2vh',
    justifyContent: 'center',
    alignItems: 'center',
    //color: '#fffaf6',
    color: '#000000',
    fontFamily: "'Klee One', cursive",
  },
  h4Text: {
    fontSize: '2.2vh',
    textAlign: 'center',
    //color: '#fffaf6',
    color: '#000000',
    fontFamily: "'Klee One', cursive",
  },
    contentText: {
    fontSize: '4vh',
    textAlign: 'center',
    //color: '#fffaf6',
    color: '#000000',
    fontFamily: "'Klee One', cursive",
  },
  closeButton: {
    width: '10vh',
    height: '10vh',
  },
    audioButton: {
    width: '10vh',
    height: '10vh',
  },
});

export default CustomModal;
