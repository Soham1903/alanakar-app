import { Observable } from '@nativescript/core';
import { notes, patterns } from '../models/notes';
import { AudioService } from '../services/audio-service';

export class AlankarViewModel extends Observable {
  private _selectedPattern: string[] = [];
  private _generatedAlankar: string = '';
  private _currentPatternIndex: number = 0;
  private audioService: AudioService;
  private _isPlaying: boolean = false;

  constructor() {
    super();
    this.audioService = new AudioService();
    this.generateNewPattern();
  }

  get generatedAlankar(): string {
    return this._generatedAlankar;
  }

  set generatedAlankar(value: string) {
    if (this._generatedAlankar !== value) {
      this._generatedAlankar = value;
      this.notifyPropertyChange('generatedAlankar', value);
    }
  }

  get currentPattern(): string {
    return this._selectedPattern.join(' ');
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }

  set isPlaying(value: boolean) {
    if (this._isPlaying !== value) {
      this._isPlaying = value;
      this.notifyPropertyChange('isPlaying', value);
    }
  }

  onGenerateNew() {
    this.generateNewPattern();
  }

  onNextPattern() {
    this._currentPatternIndex = (this._currentPatternIndex + 1) % patterns.length;
    this._selectedPattern = patterns[this._currentPatternIndex];
    this.generateAlankar();
  }

  async onPlayPattern() {
    if (this.isPlaying) return;
    
    this.isPlaying = true;
    const fullPattern = [...this._selectedPattern, ...this._selectedPattern.reverse()];
    await this.audioService.playPattern(fullPattern);
    this.isPlaying = false;
  }

  private generateNewPattern() {
    this._selectedPattern = patterns[this._currentPatternIndex];
    this.generateAlankar();
  }

  private generateAlankar() {
    const ascending = this._selectedPattern.join(' ');
    const descending = [...this._selectedPattern].reverse().join(' ');
    this.generatedAlankar = `${ascending} ${descending}`;
  }
}