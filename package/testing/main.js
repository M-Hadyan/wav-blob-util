const getWaveBlob = require("wav-blob-util");
const fs = require('fs');
const wav = require('node-wav');

async function test() {
  try {
    // Load audio file
    const audioFilePath = 'C:/workspace/asr/asr-frontend/assets/audio/FirstSample.wav';
    const audioFileData = fs.readFileSync(audioFilePath);
  
    // Decode the audio file data
    const audio = wav.decode(audioFileData);
  
    // Extract audio samples from the loaded file
    const audioData = audio.channelData[0];
  
    // Convert audio samples to wave blob
    // const wavBlob = await getWaveBlob(audioData, false);
    // console.log('Wave Blob:', wavBlob);
  
    // Write the wave blob to a file
    // fs.writeFileSync('audio.wav', Buffer.from(wavBlob));
  
    console.log('Wave file written successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
