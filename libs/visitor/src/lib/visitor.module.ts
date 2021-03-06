import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VisitorComponent } from './visitor.component';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@nrwlex/poi';
import { PoiListComponent } from './poi-list/poi-list.component';

@NgModule({
  imports: [CommonModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  RouterModule.forChild([
    {
      path: '',
      component: VisitorComponent
    }
  ]),
  PoiModule
  ],
  declarations: [VisitorComponent, PoiListComponent],
})
export class VisitorModule {}
