import { PromiseModule } from './promise.module';

describe('PromiseModule', () => {
  let promiseModule: PromiseModule;

  beforeEach(() => {
    promiseModule = new PromiseModule();
  });

  it('should create an instance', () => {
    expect(promiseModule).toBeTruthy();
  });
});
