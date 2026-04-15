import { EventEmitter } from '@angular/core';

/**
 * No need to handle pause state for the moment, it starts, runs and restart on current value reaching max value.
 * If it is looping it keeps doing so until the element using it is destroyed.
 * states:
 * - Idle
 * - Running
 * states management:
 * - start
 * - tick-update
 * - stop
 * properties:
 * - current: 0
 * - max: tbd (positive)
 * - isLooping: false
 * - onTimerStart
 * - onTimerStop
 */

export class Interval {
  onTimerStarted = new EventEmitter<void>();

  private readonly isLooping: boolean;
  private isRunning: boolean = false;
  private current: number = 0;
  private readonly max: number;

  constructor(max: number, isLooping: boolean) {
    this.max = max;
    this.isLooping = isLooping;
  }

  start(): void {
    this.isRunning = true;
  }

  tick(): void {
    if (!this.isRunning) return;
    this.current++;

    if (this.isLooping && this.hasReachedMaxValue()) this.current = 0;
  }

  stop(): void {
    this.isRunning = false;
  }

  private hasReachedMaxValue(): boolean {
    return this.current >= this.max;
  }
}
