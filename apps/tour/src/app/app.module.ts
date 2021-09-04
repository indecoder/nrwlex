import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: () => import('@nrwlex/admin').then((m) => m.AdminModule),
      },
      {
        path: 'tour',
        loadChildren: () =>
          import('@nrwlex/visitor').then((m) => m.VisitorModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tour',
      },
    ]),
    StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.reducer),
    EffectsModule.forFeature([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
