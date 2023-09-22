import { PureLoggerPipe } from './pure-logger.pipe';

describe('PureLoggerPipe', () => {
  it('create an instance', () => {
    const pipe = new PureLoggerPipe();
    expect(pipe).toBeTruthy();
  });
});
