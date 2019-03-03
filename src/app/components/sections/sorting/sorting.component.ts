import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OpenaqApiService } from 'src/app/openaq-api.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
  order_by_choices = [
    {label: 'Date', value: 'date'},
    {label: 'Value', value: 'value'},
    {label: 'Location', value: 'location'},
    {label: 'Country', value: 'country'},
    {label: 'City', value: 'city'},
  ];
  in_choices = [
    {label: 'Descending Order', value: 'desc'},
    {label: 'Ascending Order', value: 'asc'},
  ];
  include_fields_choices = [
    'attribution',
    'averagingPeriod',
    'sourceName'
  ];
  _form: FormGroup;

  constructor(private api: OpenaqApiService) {
   }

  ngOnInit() {
    this._form = new FormGroup({
      order_by: new FormControl(),
      sort: new FormControl(),
      include_fields: new FormControl(),
    });

    this._form.valueChanges.subscribe(value => {
      this.changed.emit(value);
    });
  }

}
