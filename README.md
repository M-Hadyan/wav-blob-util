# wav-blob-util 

<!-- [![NPM Package](https://img.shields.io/npm/v/rakam?color=blue)](https://npmjs.com/package/rakam "View this project on npm")
![npm downloads](https://img.shields.io/npm/dm/rakam "Downloads from npmjs")
[![circleci](https://circleci.com/gh/scicave/rakam.svg?style=shield)](https://app.circleci.com/pipelines/github/scicave/rakam)
[![Build Status](https://github.com/scicave/rakam/workflows/Node.js%20CI/badge.svg)](https://github.com/scicave/rakam/actions?query=workflow%3A%22Node.js+CI%22)
[![Codecov Coverage](https://codecov.io/gh/scicave/rakam/branch/develop/graph/badge.svg)](https://codecov.io/gh/scicave/rakam/)
[![CodeFactor](https://www.codefactor.io/repository/github/scicave/rakam/badge)](https://www.codefactor.io/repository/github/scicave/rakam)
[![Maintenance](https://img.shields.io/maintenance/yes/2021.svg)](https://github.com/scicave/rakam/graphs/commit-activity)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fscicave%2Frakam.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fscicave%2Frakam?ref=badge_shield) -->

wav-blob-util is a utility library for converting audio data to the wave file format and creating Blob objects from the wave data. It provides functions to convert audio samples to wave blobs with various configurations such as sample rate, bit depth, and channel count 🚀.

## Features

- ✅ String and integer encoding functions: Convert strings and integers into their respective encoded formats for seamless integration with audio data.
- ✅ Support for 16-bit and 32-bit encoding: Choose between different bit depths to suit your specific requirements.
- ✅ Blob to AudioBuffer conversion: Transform Blob data into AudioBuffer objects using the Web Audio API, allowing flexible handling of audio from various sources.
- ✅ WAV file encoding: Encode AudioBuffer data as a wave file (WAV) with accurately calculated header information, ensuring compatibility across different platforms and applications.
- ✅ Streamlined integration: Retrieve the encoded audio as a Blob object with the audio/wav MIME type, facilitating easy storage, streaming, or integration into your projects.


# Installation


<strong> `NPM` </strong>

```sh
❯ npm install wav-blob-util
```

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
```

## API


getWaveBlob(blobData, as32BitFloat, contextOptions)
Converts the provided audio data to a wave blob.

  * `blobData` (Blob | Blob[]): The audio data to be converted. It can be a Blob object or an array of Blob objects.

  * `as32BitFloat` (boolean): Convert to a 16-bit or 32-bit wave file. Default is 16-bit.

  * `contextOptions` (AudioContextOptions): Optional audio context options to be used for encoding.

Returns a Promise that resolves to the wave Blob object.


## 📜 License

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
