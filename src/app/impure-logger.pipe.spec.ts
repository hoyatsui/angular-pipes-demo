import { ImpureLoggerPipe } from './impure-logger.pipe';

describe('ImpureLoggerPipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureLoggerPipe();
    expect(pipe).toBeTruthy();
  });
});
