export class Duration {
  private _duration: number;

  constructor(duration: number) {
    this._duration = duration;
  }

  public toSeconds(): number {
    return this._duration;
  }

  public toDurationString(): string {
    const hours = Math.floor(this._duration / 3600);
    const minutes = Math.floor((this._duration % 3600) / 60);
    const seconds = this._duration % 60;

    const mmss = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    // Only show hours if it's greater than 0
    return hours > 0 ? `${hours}:${mmss}` : mmss;
  }

  public static add(a: Duration, b: Duration): Duration {
    return new Duration(a._duration + b._duration);
  }

  public static subtract(a: Duration, b: Duration): Duration {
    return new Duration(a._duration - b._duration);
  }

  public static zero(): Duration {
    return new Duration(0);
  }

  public static fromSeconds(seconds: number): Duration {
    // Truncate to integer
    seconds = Math.floor(seconds);
    return new Duration(seconds);
  }

  public static fromDurationString(durationString: string): Duration {
    const [hours, minutes, seconds] = durationString.split(':').map(Number);
    return new Duration(hours * 3600 + minutes * 60 + seconds);
  }
}
