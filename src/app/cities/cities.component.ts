import { Component, OnInit } from '@angular/core';
import { OpenaqApiService } from '../openaq-api.service';
import { City } from '../models/city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  loading = true;
  cities: City[];
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
    this.api.listCities(params).subscribe(res => {
      this.cities = res.results;
      this.page = res.meta.page;
      this.found = res.meta.found;
      this.loading = false;
    });
  }

  dataTableColumns() {
    return ['city', 'country', 'locations', 'count'];
  }

  placeChanged(value) {
    this.placeFilter = value;
    this.loadData();
  }

}
