import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AppActions from './app.actions';
import { AppEffects } from './app.effects';

describe('AppEffects', () => {
  let actions: Observable<Action>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AppEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AppEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AppActions.init() });

      const expected = hot('-a-|', {
        a: AppActions.loadAppSuccess({ app: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
