import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@nrwlex/poi';

@Component({
  selector: 'nrwlex-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.scss']
})
export class PoiListComponent implements OnInit {

  pois$ = this.store.select(PoiSelectors.getAllPoi);
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(PoiActions.init());
  }

}
