import SoundLevel from 'react-native-sound-level';

let cryStartTime = null;

export const startCryDetection = (onCryDetected) => {
  SoundLevel.start();

  SoundLevel.onNewFrame = (data) => {
    const level = data.value; // dB

    // threshold (adjust kar sakte ho)
    if (level > -20) {
      if (!cryStartTime) {
        cryStartTime = Date.now();
      }

      const duration = (Date.now() - cryStartTime) / 1000;

      if (duration > 10) {
        onCryDetected();
        cryStartTime = null;
      }
    } else {
      cryStartTime = null;
    }
  };
};

export const stopCryDetection = () => {
  SoundLevel.stop();
};