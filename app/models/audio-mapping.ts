export interface NoteAudio {
  note: string;
  audioFile: string;
}

// This will be populated with your actual audio files
export const noteAudioMapping: NoteAudio[] = [
  { note: 'S', audioFile: '~/assets/audio/S.mp3' },
  { note: 'r', audioFile: '~/assets/audio/r.mp3' },
  { note: 'R', audioFile: '~/assets/audio/R.mp3' },
  { note: 'g', audioFile: '~/assets/audio/g.mp3' },
  { note: 'G', audioFile: '~/assets/audio/G.mp3' },
  { note: 'm', audioFile: '~/assets/audio/m.mp3' },
  { note: 'M', audioFile: '~/assets/audio/M.mp3' },
  { note: 'P', audioFile: '~/assets/audio/P.mp3' },
  { note: 'd', audioFile: '~/assets/audio/d.mp3' },
  { note: 'D', audioFile: '~/assets/audio/D.mp3' },
  { note: 'n', audioFile: '~/assets/audio/n.mp3' },
  { note: 'N', audioFile: '~/assets/audio/N.mp3' },
  { note: 'S\'', audioFile: '~/assets/audio/S_high.mp3' }
];