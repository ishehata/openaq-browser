import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OpenaqApiService } from 'src/app/openaq-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
  _form: FormGroup;

  constructor(private api: OpenaqApiService) {
   }

  ngOnInit() {
    this._form = new FormGroup({
      value_from: new FormControl(),
      value_to: new FormControl(),
      date_from: new FormControl(),
      date_to: new FormControl(),
      coordinates: new FormControl(),
      radius: new FormControl(),
      has_geo: new FormControl(),
    });

    this._form.valueChanges.subscribe(value => {
      this.changed.emit(value);
    });
  }

}
