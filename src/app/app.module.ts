import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { PlaceSectionComponent } from './components/sections/place-section/place-section.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { LatestComponent } from './latest/latest.component';
import { LocationsComponent } from './locations/locations.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { SortingComponent } from './components/sections/sorting/sorting.component';
import { FiltersComponent } from './components/sections/filters/filters.component';
import { ParametersComponent } from './parameters/parameters.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    PlaceSectionComponent,
    DataTableComponent,
    HomeComponent,
    CitiesComponent,
    LatestComponent,
    LocationsComponent,
    MeasurementsComponent,
    SortingComponent,
    FiltersComponent,
    ParametersComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
