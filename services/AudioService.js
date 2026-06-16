

import SoundLevel from 'react-native-sound-level';

class AudioService {
  start(callback) {
    SoundLevel.start();

    SoundLevel.onNewFrame = (data) => {
      const level = data.value; // sound level

      console.log("Sound Level:", level);

      if (level > -20) {
        callback(true); // cry detected
      } else {
        callback(false);
      }
    };
  }

  stop() {
    SoundLevel.stop();
  }
}

export default new AudioService();