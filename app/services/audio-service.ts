import { TNSPlayer } from '@nativescript/audio';
import { noteAudioMapping } from '../models/audio-mapping';

export class AudioService {
  private player: TNSPlayer;
  private isPlaying: boolean = false;

  constructor() {
    this.player = new TNSPlayer();
    this.player.debug = false;
  }

  async playNote(note: string): Promise<void> {
    try {
      const audioFile = noteAudioMapping.find(mapping => mapping.note === note)?.audioFile;
      if (!audioFile) {
        console.error(`No audio file found for note: ${note}`);
        return;
      }

      await this.player.stop();
      await this.player.dispose();
      
      await this.player.initFromFile({
        audioFile: audioFile,
        loop: false,
        completeCallback: () => {
          this.isPlaying = false;
        },
        errorCallback: (error) => {
          console.error('Audio playback error:', error);
          this.isPlaying = false;
        }
      });

      this.isPlaying = true;
      await this.player.play();
    } catch (error) {
      console.error('Error playing note:', error);
    }
  }

  async playPattern(pattern: string[]): Promise<void> {
    for (const note of pattern) {
      await this.playNote(note);
      // Add a small delay between notes
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  async dispose(): Promise<void> {
    try {
      await this.player.dispose();
    } catch (error) {
      console.error('Error disposing audio player:', error);
    }
  }
}