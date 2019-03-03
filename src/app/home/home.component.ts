import { Component, OnInit } from '@angular/core';
import { OpenaqApiService } from '../openaq-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locationsCount = 0;
  countriesCount = 0;
  measurementsCount = 0;

  constructor(private api: OpenaqApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.listCountries(0).subscribe(res => {
      this.countriesCount = res.meta.found;
    });
    this.api.listLocations({}, 0).subscribe(res => {
      this.locationsCount = res.meta.found;
    });
    this.api.listMeasurements({}, 0).subscribe(res => {
      this.measurementsCount = res.meta.found;
    });
  }

}
