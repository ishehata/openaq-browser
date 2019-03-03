import { Component, OnInit } from '@angular/core';
import { OpenaqApiService } from '../openaq-api.service';
import { Source } from '../models/source.model';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  loading = true;
  sources: Source[];
  page = 1;
  found = 0;

  constructor(private api: OpenaqApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.listSources().subscribe(res => {
      this.sources = res.results;
      this.page = res.meta.page;
      this.found = res.meta.found;
      this.loading = false;
    });
  }

  dataTableColumns() {
    return ['name', 'url', 'adapter', 'city', 'country', 'description', 'resolution', 'sourceURL', 'contacts', 'active'];
  }

}
