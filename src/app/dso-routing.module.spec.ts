import { DsoRoutingModule } from './dso-routing.module';

describe('DsoRoutingModule', () => {
  let dsoRoutingModule: DsoRoutingModule;

  beforeEach(() => {
    dsoRoutingModule = new DsoRoutingModule();
  });

  it('should create an instance', () => {
    expect(dsoRoutingModule).toBeTruthy();
  });
});
