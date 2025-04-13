const https = require('https');
const fs = require('fs');
const path = require('path');

// Create music directory if it doesn't exist
const musicDir = path.join(__dirname, 'public', 'music');
if (!fs.existsSync(musicDir)) {
  fs.mkdirSync(musicDir, { recursive: true });
}

// Music tracks to download (royalty-free music from Pixabay)
const tracks = [
  {
    name: 'lofi-coding.mp3',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=lofi-study-112191.mp3'
  },
  {
    name: 'data-science.mp3',
    url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1ecd.mp3?filename=ambient-piano-amp-strings-9834.mp3'
  },
  {
    name: 'ml-beats.mp3',
    url: 'https://cdn.pixabay.com/download/audio/2022/01/26/audio_126b0ba0.mp3?filename=electronic-future-beats-156f1b1e.mp3'
  },
  {
    name: 'project-flow.mp3',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c4c8a73467.mp3?filename=lofi-study-112191.mp3'
  },
  {
    name: 'contact-groove.mp3',
    url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1ecd.mp3?filename=jazz-cafe-112190.mp3'
  }
];

// Download each track
tracks.forEach(track => {
  const filePath = path.join(musicDir, track.name);
  
  console.log(`Downloading ${track.name}...`);
  
  https.get(track.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${track.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${track.name}: ${err.message}`);
  });
});

console.log('Music download process started. This may take a few minutes...'); 