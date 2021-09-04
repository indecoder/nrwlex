import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AppActions from './app.actions';
import * as AppFeature from './app.reducer';

@Injectable()
export class AppEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AppActions.loadAppSuccess({ app: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AppActions.loadAppFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
