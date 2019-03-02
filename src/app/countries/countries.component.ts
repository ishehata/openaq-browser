import { Component, OnInit } from '@angular/core';
import { OpenaqApiService } from '../openaq-api.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  loading = true;
  countries: Country[];
  page = 1;
  found = 0;

  constructor(private api: OpenaqApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.listCountries().subscribe(res => {
      this.countries = res.results;
      this.page = res.meta.page;
      this.found = res.meta.found;
      this.loading = false;
    });
  }

  dataTableColumns() {
    return ['name', 'code', 'count'];
  }
  

}
