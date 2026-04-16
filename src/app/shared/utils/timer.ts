import { EventEmitter } from '@angular/core';

export class Timer {
  onTimerStarted = new EventEmitter<void>();
  onTimerStopped = new EventEmitter<void>();

  private currentValue: number = 0;
  private readonly isLooping: boolean;
  private isRunning: boolean = false;
  private readonly maxValue: number;

  private interval?: ReturnType<typeof setInterval>;

  constructor(maxValue: number, isLooping: boolean) {
    this.maxValue = maxValue;
    this.isLooping = isLooping;

    this.setInterval();
    this.start();
  }

  get progress() {
    return (this.currentValue / this.maxValue) * 100;
  }

  tick(): void {
    if (!this.isRunning) return;

    this.currentValue++;
    // console.log(`${this.currentValue} / ${this.maxValue} | progress: ${this.progress}`);

    if (this.hasReachedMaxValue()) {
      this.stop();
      if (this.isLooping) this.reset();
    }
  }

  reset(): void {
    this.currentValue = 0;
    this.resetInterval();
    this.start();
  }

  start(): void {
    this.isRunning = true;
    this.onTimerStarted.emit();
  }

  clear(): void {
    clearInterval(this.interval);
  }

  private stop(): void {
    this.isRunning = false;
    this.onTimerStopped.emit();
  }

  private resetInterval(): void {
    this.clear();
    this.setInterval();
  }

  private setInterval(): void {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  private hasReachedMaxValue(): boolean {
    return this.currentValue >= this.maxValue;
  }
}
