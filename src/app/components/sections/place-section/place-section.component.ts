import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OpenaqApiService } from 'src/app/openaq-api.service';
import { Country } from 'src/app/models/country.model';
import { City } from 'src/app/models/city.model';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-place-section',
  templateUrl: './place-section.component.html',
  styleUrls: ['./place-section.component.scss']
})
export class PlaceSectionComponent implements OnInit {

  @Input() countryEnabled: false;
  @Input() cityEnabled: false;
  @Input() locationEnabled: false;
  @Input() parameterEnabled: false;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
  countries: Country[] = [];
  cities: City[] = [];
  locations: Location[] = [];
  paramters = [
    {label: 'PM 2.5', value: 'pm25'},
  ]
  _form: FormGroup;
  constructor(private api: OpenaqApiService) {
   }

  ngOnInit() {
    this._form = new FormGroup({});
    if (this.countryEnabled) {
      let ctrl = new FormControl();
      this._form.addControl('country', ctrl);
      ctrl.valueChanges.subscribe(value => this._countryChanged(value));
      
      this.api.listCountries().subscribe(res => {
        this.countries = res.results;
      });
    }

    if (this.cityEnabled) {
      let ctrl = new FormControl();
      this._form.addControl('city', ctrl);
      ctrl.valueChanges.subscribe(value => this._cityChanged(value));
    }

    if (this.locationEnabled) {
      let ctrl = new FormControl();
      this._form.addControl('location', ctrl);
    }

    if (this.parameterEnabled) {
      let ctrl = new FormControl();
      this._form.addControl('parameter', ctrl);
    }

    this._form.valueChanges.subscribe(value => {
      this.changed.emit(value);
    });
  }

  private _countryChanged(value) {
    if (this.cityEnabled) {
      this.api.listCities({country: value}).subscribe(res => {
        this.cities = res.results;
      });
    }
  }
  
  private _cityChanged(value) {
    if (this.locationEnabled) {
      this.api.listLocations({city: value}).subscribe(res => {
        this.locations = res.results;
      });
    }
  }

}
