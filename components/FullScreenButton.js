import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class FullscreenButton extends React.Component {
  toggleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;

    const cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.webkitIsFullScreen &&
      !doc.mozFullScreen &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  };

  render() {
    return (
      <div>
        <TouchableOpacity
                    onPress={this.toggleFullScreen}>
          <Text style={styles.text}>大きく・小さく</Text>
        </TouchableOpacity>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  heading1: {
    //fontSize: '1vw',
    fontWeight: 'bold',
    fontFamily: "'Klee One', cursive",
  },
  text: { color: '#fffaf6', fontSize: '.7vw' },
  menuButton: {
    //height: '8.2vw',
    //width: '8.2vw',
    backgroundImage: 'linear-gradient(160deg, #f0eff3 0%, #351201 127%)',
    borderRadius: '.15vw',
    boxShadow: '0vw .1vw .5vw rgba(0, 0, 0, 0.5)',
    border: '0vw',
    color: '#fffaf6',
    fontFamily: "'Klee One', cursive",
    fontSize: '.9vw',
    objectFit: 'contain',

    justifyContent: 'center',
    alignItems: 'center',
  },

  menuButtonHover: {
    backgroundColor: 'rgba(73, 36, 3, 0.884)',
    transition: 'background-color 0.2s',
    //height: '7vw',
    //width: '7vw',
  },
});

export default FullscreenButton;
