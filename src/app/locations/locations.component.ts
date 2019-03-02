import { Component, OnInit } from '@angular/core';
import { OpenaqApiService } from '../openaq-api.service';
import { Location } from '../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  
  loading = true;
  locations: Location[];
  page = 1;
  found = 0;

  placeFilter = {};

  constructor(private api: OpenaqApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let params = {};
    params = {
      ...this.placeFilter,
    }
    this.api.listLocations(params).subscribe(res => {
      this.locations = res.results;
      this.page = res.meta.page;
      this.found = res.meta.found;
      this.loading = false;
    });
  }

  dataTableColumns() {
    return ['sourceName', 'city', 'country', 'location', 'parameters', 'coordinates', 'count', 'firstUpdated', 'lastUpdated'];
  }

  placeChanged(value) {
    this.placeFilter = value;
    this.loadData();
  }

}
