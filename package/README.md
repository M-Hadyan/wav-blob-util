# wav-blob-util


wav-blob-util is a utility library for converting audio data to the wave file format and creating Blob objects from the wave data. It provides functions to convert audio samples to wave blobs with various configurations such as sample rate, bit depth, and channel count.



## Installation



```bash

npm install wav-blob-util

```

[JsonML]: http://jsonml.org/ "JSON Markup Language"

## Usage



```js

const getWaveBlob = require("wav-blob-util");


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
    const wavBlob = await getWaveBlob(audioData, false);
    console.log('Wave Blob:', wavBlob);
  
    // Write the wave blob to a file
    fs.writeFileSync('audio.wav', Buffer.from(wavBlob));
  
    console.log('Wave file written successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}



// Example usage with audio samples array

const audioData = [0.1, 0.2, 0.3, 0.4]; // Replace with your audio data

convertAudioToWave(audioData, false);



```



## API





getWaveBlob(blobData, as32BitFloat, contextOptions)

Converts the provided audio data to a wave blob.



  * `blobData` (Blob | Blob[]): The audio data to be converted. It can be a Blob object or an array of Blob objects.



  * `as32BitFloat` (boolean): Convert to a 16-bit or 32-bit wave file. Default is 16-bit.



  * `contextOptions` (AudioContextOptions): Optional audio context options to be used for encoding.



Returns a Promise that resolves to the wave Blob object.





## License



Released under the MIT license.



Permission is hereby granted, free of charge, to any person obtaining a copy of

this software and associated documentation files (the "Software"), to deal in

the Software without restriction, including without limitation the rights to

use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of

the Software, and to permit persons to whom the Software is furnished to do so,

subject to the following conditions:



The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.



THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS

FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR

COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER

IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN

CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.