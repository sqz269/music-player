import pino, { transport } from 'pino';
import pinoPretty from 'pino';

class _Logger {
  private _logger: pino.Logger;

  constructor() {
    this._logger = pino({
      level: 'debug',
      browser: {
        asObject: true,
      },
    });
  }

  public getLogger(name: string): pino.Logger {
    return this._logger.child({ name });
  }
}

const Logger = new _Logger();

export default Logger;
