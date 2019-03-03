import { Component, OnInit } from '@angular/core';
import { OpenaqApiService } from '../openaq-api.service';
import { Measurement } from '../models/measurement.model';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  loading = true;
  measurements: Measurement[];
  page = 1;
  found = 0;

  placeFilter = {};
  sortingFilter = {};
  filtersFilter = {};

  constructor(private api: OpenaqApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let params = {};
    params = {
      ...this.placeFilter,
      ...this.sortingFilter,
      ...this.filtersFilter,
    }
    this.api.listMeasurements(params).subscribe(res => {
      this.measurements = res.results;
      this.page = res.meta.page;
      this.found = res.meta.found;
      this.loading = false;
    });
  }

  dataTableColumns() {
    return ['location', 'city', 'country', 'parameter', 'value', 'unit', 'coordinates', 'date.local'];
  }

  placeChanged(value) {
    this.placeFilter = value;
    this.loadData();
  }

  sortingChanged(value) {
    this.sortingFilter = value;
    this.loadData();
  }

  filtersChanged(value) {
    this.filtersFilter = value;
    this.loadData();
  }

}
