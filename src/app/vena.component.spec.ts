import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { VenaAppComponent } from '../app/vena.component';

beforeEachProviders(() => [VenaAppComponent]);

describe('App: Vena', () => {
  it('should create the app',
      inject([VenaAppComponent], (app: VenaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'vena works!\'',
      inject([VenaAppComponent], (app: VenaAppComponent) => {
    expect(app.title).toEqual('vena works!');
  }));
});
